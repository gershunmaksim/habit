// React Native and Components
import clsx from "clsx"
import React from "react"
import { Text, TouchableOpacity } from "react-native"
//Libraries
//Hooks and Redux
//styles and Icons

export interface ButtonComponentProps {
  title: string
  classNameBtn?: string
  onPress?: () => void
}

const ButtonComponent = ({
  title,
  classNameBtn,
  onPress,
}: ButtonComponentProps
) => {
  return (
    <TouchableOpacity onPress={onPress} className={clsx("bg-blue1 rounded-16 px-[77px] py-[16px] items-center justify-center", classNameBtn )}>
      <Text className="text-white text-16 font-sans500">
        {title}
      </Text>
    </TouchableOpacity>
  ) 
}

export default ButtonComponent