import { ResponseIcons } from '../utils/Helpers';
export interface Weather {
  name: string;
  main: string;
  description: string;
  icon: ResponseIcons;
  temp: number;
}
