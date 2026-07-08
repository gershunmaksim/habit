/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react"

// Components
import {
  View,
  ViewProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native"

// Styles

interface Props extends ViewProps, TouchableOpacityProps {
  className?: string
}

const DmView: React.FC<Props> = ({
  onPress,
  className,
  children,
  ...restProps
}) => {
  const Wrapper = onPress ? TouchableOpacity : View

  return (
    // @ts-ignore
    <Wrapper className={className} onPress={onPress} {...restProps}>
      {children}
    </Wrapper>
  )
}

export default DmView