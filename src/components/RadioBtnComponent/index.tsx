// React Native and Components
import clsx from "clsx"
import React from "react"
import { Text, Pressable, View } from "react-native"
//Libraries
//Hooks and Redux
//styles and Icons

export interface RadioBtnComponentProps {
  isActive: boolean
}

const RadioBtnComponent = ({
  isActive,
}: RadioBtnComponentProps
) => {
  return (
    <View className="border-1 border-blue1 w-[24px] h-[24px] rounded-full items-center justify-center">
      {isActive && (
        <View className="bg-blue1 w-[10px] h-[10px] rounded-full"/>
      )}
    </View>
  ) 
}

export default RadioBtnComponent