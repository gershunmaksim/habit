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
      style={{
        flexGrow: 1,
      }}
      className={clsx("p-[16px] bg-blue1 rounded-[15px]", classNameCard)}
      onPress={onPress}
      >
      <View className="flex-row items-center justify-between ">
        <Text className={clsx("text-12 text-sans700", classNameTitle ?? "text-white1")}>{title}</Text>
        {isRightElement && <Text className={clsx("text-12 text-sans400 underline", classNameTitle ?? "text-white1")}>{isRightElement}</Text>}
      </View>
      <View className="mt-[13px] items-left justify-center ">
        <Icon />
      </View>
      <View className="flex-row items-center mt-[5px] justify-left">
        <Text className={clsx("text-16", classNameSubtitle ?? "text-white1")}>
          {subtitle}
        </Text>
      </View>
      <View className="flex-row items-center mt-[4px] justify-between">
        <Text className={clsx("text-12", classNameTime ?? "text-white1")}>
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