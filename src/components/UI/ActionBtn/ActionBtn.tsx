import React from "react"


import clsx from "clsx"
import { DmText, DmView } from "components/UI"

interface Props {
  classNameTitle?: string
  title?: string
  onPress?: () => void
  className?: string
  textClassName?: string
  iconLeft?: boolean
  Icon?: React.ReactNode
  disable?: boolean
  withoutPadding?: boolean
}

const ActionBtn: React.FC<Props> = ({
  title,
  onPress,
  className,
  classNameTitle,
  disable,
  withoutPadding = false
}) => {
  return (
    <DmView className={clsx(withoutPadding ? "" : "px-[23px]")}>
      <DmView
        onPress={disable ? undefined : onPress}
        className={clsx(
          "bg-blue101 pt-[15px] pb-[12px] rounded-20 items-center justify-center",
          disable && "opacity-60",
          className
        )}
      >
        <DmText
          className={clsx(
            "text-white100 text-16 font-dmSans500",
            classNameTitle
          )}
        >
          {title}
        </DmText>
      </DmView>
    </DmView>
  )
}

export default ActionBtn