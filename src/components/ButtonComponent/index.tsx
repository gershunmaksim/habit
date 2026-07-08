// React Native and Components
import clsx from "clsx"
import React from "react"
import { Text, Pressable } from "react-native"
//Libraries
//Hooks and Redux
//styles and Icons

export interface ButtonComponentProps {
  title: string
  classNameBtn?: string
}

const ButtonComponent = ({
  title,
  classNameBtn,
}: ButtonComponentProps
) => {
  return (
      <Pressable className={clsx("bg-blue1 rounded-16 px-[77px] py-[16px] items-center justify-center", classNameBtn )}>
        <Text className="text-white text-16 font-sans500">
          {title}
        </Text>
      </Pressable>
  ) 
}

export default ButtonComponent