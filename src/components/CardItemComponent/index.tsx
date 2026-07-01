import clsx from "clsx"
import React from "react"
import { View, Text } from "react-native"
import { SvgProps } from "react-native-svg"

export interface CardItemComponentProps {
  title: string
  isRightElement?: string
  Icon: React.FC<SvgProps>
  subtitle: string
  time: string
  isHistory?: string
  classNameCard?: string
  classNameTitle?: string
}

const CardItemComponent = ({
  title, 
  isRightElement,
  Icon,
  subtitle, 
  time,
  isHistory,
  classNameCard, 
  classNameTitle
  }: CardItemComponentProps
) => {
  return (
    <View className={clsx("w-[156px] h-[210px] bg-blue1 rounded-[15px]", classNameCard)}>
      <View className="flex-row items-center justify-between pt-[16px] px-[16px]">
        <Text className={clsx("text-12  text-white1", classNameTitle)}>{title}</Text>
        {isRightElement && <Text className="text-12 text-white1">{isRightElement}</Text>}
      </View>
      <View className="mt-[13px] ml-[15px] items-left justify-center ">
        <Icon />
      </View>
      <View className="flex-row items-center justify-left ml-[16px] pt-[16px]">
        <Text className="text-16 text-white1">
          {subtitle}
        </Text>
      </View>
      <View className="flex-row items-center justify-between pt-[4px] px-[16px]">
        <Text className="text-12 text-white1">
          {time}
        </Text>
        {isHistory && (
          <Text className="text-12 text-white1">
            {isHistory}
          </Text>
        )}
      </View>
    </View>
  )
}

export default CardItemComponent