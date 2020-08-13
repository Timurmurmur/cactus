import { NavigationProp, NavigationAction, ParamListBase as ParamList, PartialState, CommonActions } from '@react-navigation/native';


export interface Navigation {
  dispatch(action: NavigationAction | ((state: any) => NavigationAction)): void;
  navigate<RouteName extends keyof ParamList>(...args: any): void;
  navigate<RouteName extends keyof ParamList>(route: any): void;
  reset(state: any): void;
  goBack(): void;
  isFocused(): boolean;
  canGoBack(): boolean;
  addListener(event: string, callBack: (e: any) => void): void,
  closeDrawer(): void,
  dangerouslyGetParent(): void,
  dangerouslyGetState(): {},
  dispatch({type, target, payload, source}:NavigationAction): void,
  goBack(): void,
  isFocused(): boolean,
  jumpTo(name: string, params: object): void,
  navigate(name: string, params: object): void,
  openDrawer(): any,
  removeListener(listener: string): void,
  // reset(): void,
  // setOptions(): void,
  setParams(params: object): void,
  // Set params for current route
  // toggleDrawer(): void,
  // SOMETHING WITH CURRENT DRAWER
}
export interface Route {
  key: string;
  name: string;
  params: object | undefined;
}