export enum AppNavigation {
  EDIT_PERSONAL_INFO = "EditPersonalInfo",
}

export type NavigationStackLists<F = any> = {
  [AppNavigation.EDIT_PERSONAL_INFO]: undefined
}

export type RootStackParamList = NavigationStackLists
