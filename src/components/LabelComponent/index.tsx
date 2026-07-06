// React Native and Components
import React from "react"
import { View, Text } from "react-native"
import { SvgProps } from "react-native-svg"
//Libraries
//Hooks and Redux
//styles and Icons

export interface LabelComponentProps {
  title: string
}

const LabelComponent = ({
  title,
}: LabelComponentProps
) => {
  return (
    <View className="mt-[24px]">
      <Text className="text-base text-gray2 font-sans400">
        {title}
      </Text>
    </View>
  ) 
}

export default LabelComponent