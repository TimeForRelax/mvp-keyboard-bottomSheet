import { FC, useRef } from "react"
import { Button, StyleSheet, View } from "react-native"
import { NativeViewGestureHandler } from "react-native-gesture-handler"
import { Portal } from "@gorhom/portal"
import Animated, { useAnimatedRef } from "react-native-reanimated"
import { KeyboardAwareScrollView } from "react-native-keyboard-controller"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { BottomSheetModal, BottomSheetTextInput, BottomSheetView } from "@gorhom/bottom-sheet"
import { ModalBackdrop } from "./ModalBackdrop"

const AnimatedKeyboardAwareScrollView = Animated.createAnimatedComponent(KeyboardAwareScrollView)

interface EditPersonalInfoProps {}

export const EditPersonalInfo: FC<EditPersonalInfoProps> = () => {
  const { top, bottom } = useSafeAreaInsets()

  const bottomSheetRef = useRef<BottomSheetModal>(null)

  const animatedScrollViewRef = useAnimatedRef<Animated.ScrollView>()

  return (
    <AnimatedKeyboardAwareScrollView
      ref={animatedScrollViewRef}
      // onScroll={enableScrollLogic ? scrollHandler : undefined}
      // onContentSizeChange={enableScrollLogic ? handleContentSizeChange : undefined}
      // onLayout={enableScrollLogic ? handleLayout : undefined}
      keyboardShouldPersistTaps="handled"
      nestedScrollEnabled
      contentContainerStyle={{ paddingTop: top, paddingBottom: bottom, gap: 15 }}
      bottomOffset={25}>
      <NativeViewGestureHandler disallowInterruption={true}>
        <View style={styles.container}>
          <Button
            title="Open modal"
            onPress={() => bottomSheetRef.current?.present()}
          />

          <Portal hostName="mainPortal">
            <BottomSheetModal
              ref={bottomSheetRef}
              enablePanDownToClose
              // snapPoints={snapPoints}
              enableDynamicSizing={true}
              backdropComponent={ModalBackdrop}
              // backgroundComponent={renderBackground}
              // detached={detached}
              // onChange={onChange}
              // maxDynamicContentSize={SCREEN_HEIGHT - safeTop - moderateScale(10)}
              // this causing the bug while pan to close modal
              // keyboardBehavior="interactive"
              // keyboardBlurBehavior={isIos() ? "none" : "restore"}
              // bottomInset={bottomInset}
              // {...rest}
            >
              {/* <BottomSheetKeyboardAwareScrollView> */}
              <BottomSheetView style={[styles.content]}>
                <>
                  <BottomSheetTextInput
                    style={[styles.input, { backgroundColor: "gray" }]}
                    value={"customGender"}
                    onChangeText={() => {}}
                    placeholder="Enter the gender you identify with"
                    placeholderTextColor={"black"}
                    keyboardAppearance="light"
                    autoFocus
                  />
                </>
              </BottomSheetView>
              {/* </BottomSheetKeyboardAwareScrollView> */}
            </BottomSheetModal>
          </Portal>
        </View>
      </NativeViewGestureHandler>
    </AnimatedKeyboardAwareScrollView>
  )
}

export const styles = StyleSheet.create({
  container: {},

  content: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },

  input: { height: 55 },
})
