import React from "react"

// Components
import { Pressable, Text, TextProps } from "react-native"

// Styles & Assets
import clsx from "clsx"

interface Props extends TextProps {
  onPress?: () => void
}

const DmText: React.FC<Props> = ({
  onPress,
  className,
  children,
  ...restProps
}) => {
  const Wrapper = onPress ? Pressable : React.Fragment

  return (
    <Wrapper>
      <Text
        {...restProps}
        className={clsx("text-14", className)}
      >
        {children}
      </Text>
    </Wrapper>
  )
}

export default DmText