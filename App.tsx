import React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { KeyboardProvider } from "react-native-keyboard-controller"
import { PortalProvider } from "@gorhom/portal"
import { AppStatusBar } from "./src/AppStatusBar"
import AppNavigator from "./src/AppNavigator"
import { enableScreens } from "react-native-screens"

enableScreens()

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <KeyboardProvider
        statusBarTranslucent
        navigationBarTranslucent>
        <PortalProvider>
          <AppStatusBar />
          <AppNavigator />
        </PortalProvider>
      </KeyboardProvider>
    </SafeAreaProvider>
  )
}

export default App
