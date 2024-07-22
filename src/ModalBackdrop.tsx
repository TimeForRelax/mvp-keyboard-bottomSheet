import { BottomSheetBackdrop, useBottomSheetModal } from "@gorhom/bottom-sheet"
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types"
import { memo } from "react"
import { Keyboard, View, StyleSheet } from "react-native"

type SheetBackdropProps = JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps

export const ModalBackdrop = memo((props: SheetBackdropProps) => {
  const { dismissAll } = useBottomSheetModal()

  const handleDismissAll = () => {
    Keyboard.addListener("keyboardDidHide", onKeyboardDidHide)
    Keyboard.dismiss()
  }

  const onKeyboardDidHide = () => {
    Keyboard.removeAllListeners("keyboardDidHide")
    dismissAll()
  }

  return (
    <BottomSheetBackdrop
      {...props}
      opacity={1.4}
      appearsOnIndex={1}
      disappearsOnIndex={-1}
      enableTouchThrough={false}
      onPress={handleDismissAll}
      pressBehavior="close">
      <View style={StyleSheet.absoluteFill} />
    </BottomSheetBackdrop>
  )
})
