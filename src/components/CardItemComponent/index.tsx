// React Native and Components
import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { SvgProps } from "react-native-svg"
//Libraries
import clsx from "clsx"
//Hooks and Redux
//styles and Icons



export interface CardItemComponentProps {
  title: string
  isRightElement?: string
  Icon: React.FC<SvgProps>
  subtitle: string
  time: string
  isHistory?: string
  classNameCard?: string
  classNameTitle?: string
  classNameSubtitle?: string
  classNameTime?: string
  classNameHistory?: string
  onPress?: () => void
}

const CardItemComponent = ({
  title, 
  isRightElement,
  Icon,
  subtitle, 
  time,
  isHistory,
  classNameCard, 
  classNameTitle,
  classNameSubtitle,
  classNameTime,
  classNameHistory,
  onPress,
}: CardItemComponentProps
) => {
  return (
    <TouchableOpacity
      className={clsx("p-[16px] bg-blue1 rounded-[15px] flex-1 justify-between", classNameCard)}
      onPress={onPress}
    >
      <View className="flex-row justify-between">
        <View>
          <Text className={clsx("text-12 text-sans700", classNameTitle ?? "text-white1")}>
          {title}
        </Text>
        </View>
        {isRightElement && (
          <View className="flex-1 ml-[5px]">
            <Text className={clsx("text-12 text-sans400 underline", classNameTitle ?? "text-white1")}>
            {isRightElement}
          </Text>
          </View>
        )}
      </View>
      <View className="mt-[13px] items-start">
        <Icon />
      </View>

      <View className="mt-[5px] items-start">
        <Text className={clsx("text-16 font-bold", classNameSubtitle ?? "text-white1")}>
          {subtitle}
        </Text>
      </View>

      <View className="flex-row items-end mt-[4px] justify-between gap-x-2">
        <Text className={clsx("text-12 flex-1", classNameTime ?? "text-white1")}>
          {time}
        </Text>
        {isHistory && (
          <Text className={clsx("text-12 underline", classNameHistory ?? "text-white1")}>
            {isHistory}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default CardItemComponent