// React Native and Components
import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { SvgProps } from "react-native-svg"
//Libraries
import clsx from "clsx"
//Hooks and Redux
//styles and Icons
import BackArrowIcon from "assets/icons/back.svg"


export interface HeaderComponentProps {
  title: string
  isArrowLeft?: boolean
  onPressArrowLeft?: () => void
}

const HeaderComponent = ({
  title,
  isArrowLeft,
  onPressArrowLeft,
}: HeaderComponentProps
) => {
  return (
    <View className="flex-row align-center">
      {isArrowLeft && (
        <TouchableOpacity className="flex-row align-center mr-[12px]" onPress={onPressArrowLeft}>
          <BackArrowIcon/>
        </TouchableOpacity>
      )}
      <View className="flex-row align-center">
        <Text className="text-18 font-sans700 text-green1">{title}</Text>
      </View>
    </View>
  )
}

export default HeaderComponent