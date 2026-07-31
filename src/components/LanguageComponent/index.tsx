// React Native and Components
import clsx from "clsx"
import RadioBtnComponent from "components/RadioBtnComponent"
import React from "react"
import { Text, Pressable, View, TouchableOpacity } from "react-native"
//Libraries
//Hooks and Redux
//styles and Icons

export interface LanguageComponentProps {
  title: string
  isActive: boolean
  onPress?: () => void
}

const LanguageComponent = ({
  title,
  isActive,
  onPress,
}: LanguageComponentProps
) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex-row justify-between items-center mt-[24px]">
      <Text className="text-14 font-sans700">{title}</Text>
      <RadioBtnComponent 
        isActive={isActive} />
    </TouchableOpacity>
  ) 
}

export default LanguageComponent