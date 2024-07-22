import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack"
import { EditPersonalInfo } from "./EditPersonalInfo"
import { ModalsProvider } from "./ModalProvider"
import { AppNavigation, NavigationStackLists } from "./navigation"

export const Stack = createNativeStackNavigator<NavigationStackLists>()

const AppNavigator = () => {
  const defaultScreenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    navigationBarColor: "white",
    animation: "slide_from_right",
  }

  return (
    <NavigationContainer onReady={() => {}}>
      <ModalsProvider>
        <Stack.Navigator
          initialRouteName={AppNavigation.EDIT_PERSONAL_INFO}
          screenOptions={{
            title: "",
            orientation: "portrait",
            headerBackTitleVisible: false,
          }}>
          <Stack.Screen
            options={defaultScreenOptions}
            name={AppNavigation.EDIT_PERSONAL_INFO}
            component={EditPersonalInfo}
          />
        </Stack.Navigator>
      </ModalsProvider>
    </NavigationContainer>
  )
}

export default AppNavigator
