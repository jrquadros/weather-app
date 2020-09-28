import styled from 'styled-components/native';

export type TextProps = {
  bold?: 'normal' | 'bold';
  color?: string;
  size?: string;
};

export const Text = styled.Text<TextProps>`
  font-size: ${(props) => (props.size ? props.size : props.theme.fontSizes.large)};
  color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
  font-weight: ${(props) => props.bold || 'normal'};
`;
