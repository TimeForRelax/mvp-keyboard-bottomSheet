import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { PortalHost } from "@gorhom/portal"
import React, { FC, createContext, useCallback, useRef, useState } from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"

export type SheetContextType = {
  modals: Record<AppModal, React.RefObject<BottomSheetModal> | null>
  props: Record<AppModal, any>
  openModal: (modal: keyof typeof AppModal, props?: any) => void
  closeModal: (modal: keyof typeof AppModal) => void
}

export const ModalsContext = createContext<SheetContextType>({} as SheetContextType)

interface SheetProviderProps {
  children: React.ReactNode
}

export const ModalsProvider: FC<SheetProviderProps> = ({ children }) => {
  const initialSheetContext = {
    RESUME_INTERESTS: useRef<BottomSheetModal>(null),
    MORE_INFO: useRef<BottomSheetModal>(null),
  }

  const [modalProps, setModalProps] = useState<ModalProps>({
    RESUME_INTERESTS: {},
    MORE_INFO: {},
  })

  const openModal = useCallback((modal: keyof typeof AppModal, props: any = {}) => {
    setModalProps((prev) => ({
      ...prev,
      [modal]: props,
    }))
    initialSheetContext[modal]?.current?.present()
  }, [])

  const closeModal = useCallback((modal: keyof typeof AppModal) => {
    initialSheetContext[modal]?.current?.dismiss()
    setModalProps((prev) => ({
      ...prev,
      [modal]: {},
    }))
  }, [])

  return (
    <ModalsContext.Provider value={{ modals: initialSheetContext, props: modalProps, openModal, closeModal }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          {/* <Bottom.ModalInterests {...modalProps.RESUME_INTERESTS} />
          <Bottom.ModalMoreInfo {...modalProps.MORE_INFO} /> */}
          {children}
          <PortalHost name="mainPortal" />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ModalsContext.Provider>
  )
}
