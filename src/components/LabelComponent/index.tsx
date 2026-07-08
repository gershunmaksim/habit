// React Native and Components
import clsx from "clsx"
import React from "react"
import { View, Text } from "react-native"
import { SvgProps } from "react-native-svg"
//Libraries
//Hooks and Redux
//styles and Icons

export interface LabelComponentProps {
  title: string
  classNameTitle?: string
  className?: string
  subtitle?: string
}

const LabelComponent = ({
  title,
  subtitle,
  classNameTitle,
  className,
}: LabelComponentProps
) => {
  return (
    <View className={clsx("mt-[24px]", className )}>
      <Text className={clsx("text-14 font-sans400 text-gray2", classNameTitle)}>
        {title}
      </Text>
      {subtitle && (
        <Text className="text-14 text-gray2 font-sans400 pt-[4px] pb-[20px]">
          {subtitle}
        </Text>
      )}
    </View>
  ) 
}

export default LabelComponent