import React, { useState, useEffect } from 'react';
import { PermissionsAndroid, ActivityIndicator, RefreshControl } from 'react-native';
import styled from 'styled-components/native';
import { Weather } from '../../../entities/Weather';
import { Panel } from '../components/InfoPanel';
import { Text } from '../../base/Text';
import { LocationInfo } from '../components/LocationInfo';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { ActionFetchWeather } from '../../../redux/actions/WeatherActions';
import Geolocation from '@react-native-community/geolocation';

const Wrapper = styled.ScrollView`
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
`;

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const Weatherinfo = () => {
  const dispatch = useDispatch();
  const weatherData = useTypedSelector((state) => state.weather.weatherData);
  const error = useTypedSelector((state) => state.weather.errorMessage);
  const state = useTypedSelector((state) => state.weather.state.toString());

  const [weather, setWeather] = useState<Weather>({
    description: '',
    icon: '01d',
    main: '',
    name: '',
    temp: 0,
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location App Permission',
          message: 'Enable location permission',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        setErrorMessage('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
  };

  useEffect(() => {
    const loadWeatherInfo = async (lat: number, lon: number) => {
      dispatch(ActionFetchWeather({ lat, lon }));
    };
    const findCoordinates = async () => {
      requestLocationPermission();
      Geolocation.setRNConfiguration({ authorizationLevel: 'auto', skipPermissionRequests: false });
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          loadWeatherInfo(latitude, longitude);
          setRefreshing(false);
        },
        (err) => {
          setErrorMessage(err.message);
          setRefreshing(false);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
      );
    };
    findCoordinates();
  }, [dispatch, refreshing]);

  useEffect(() => {
    if (weatherData) {
      setWeather(weatherData);
    }
  }, [weatherData]);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);

  useEffect(() => {
    if (state === 'LOADING' || state === 'INIT') {
      setIsLoading(true);
      console.log('STATE ->', state);
      console.log(isLoading);
    } else {
      setIsLoading(false);
    }
    console.log('STATE ->', state);
  }, [state, isLoading]);

  if (isLoading === true) {
    return (
      <Container>
        <ActivityIndicator size={'large'} color={'#0000ff'} />
      </Container>
    );
  }

  if (errorMessage) {
    return (
      <Container>
        <Text color="#000">{errorMessage}</Text>
      </Container>
    );
  }

  return (
    <Wrapper refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing} />}>
      <Panel weatherInfo={{ main: weather.main, icon: weather.icon, temp: weather.temp }} />
      <LocationInfo location={weather.name} temp={weather.temp} description={weather.description} />
    </Wrapper>
  );
};
