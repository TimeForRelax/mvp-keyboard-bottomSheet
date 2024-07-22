import { FC } from "react"
import { StatusBar } from "react-native"

export enum AppStatusBarStyleType {
  LIGHT = "light-content",
  DARK = "dark-content",
  DEFAULT = "default",
}

interface AppStatusBarProps {
  barStyle?: AppStatusBarStyleType
  backgroundColor?: string
  animated?: boolean
}

export const AppStatusBar: FC<AppStatusBarProps> = ({ barStyle, backgroundColor, animated }) => {
  return (
    <StatusBar
      barStyle={barStyle ?? AppStatusBarStyleType.DEFAULT}
      backgroundColor={backgroundColor ?? "#00000000"}
      translucent={true}
      animated={animated ?? true}
    />
  )
}
