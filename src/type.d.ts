declare enum AppModal {
  RESUME_INTERESTS = "RESUME_INTERESTS",
  MORE_INFO = "MORE_INFO",
}

interface ResumeInterestsProps {}

interface MoreInfoProps {
  prop?: boolean
}

declare interface ModalProps {
  [AppModal.RESUME_INTERESTS]: ResumeInterestsProps
  [AppModal.MORE_INFO]: MoreInfoProps
}
