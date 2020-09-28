import styled from 'styled-components/native';

export const ActivityIndicator = styled.ActivityIndicator`
  color: ${(props) => props.theme.colors.secondary};
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.secondary};
`;
