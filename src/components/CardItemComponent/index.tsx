//TO DO: Робити правильний порядок import
// React Native and Components
//Libraries
//Hooks and Redux
//styles and Icons
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
    <View
      style={{
        flexGrow: 1,
      }}
      className={clsx("p-[16px] bg-blue1 rounded-[15px]", classNameCard)}>
      <View className="flex-row items-center justify-between ">
        {/* TO DO: Зараз усюди однаковий classNameTitle, а треба кожному свiй. Якщо змiнити зараз наприклад шрфит у title з 12 до 18 - то всюди де  classNameTitle передано буде теж 18. НЕ ЗАБУДЬ ПЕРЕДАВАТИ ЖИРНIСТЬ через font-sans400 наприклад*/}
        <Text className={clsx("text-12 text-sans700", classNameTitle ?? "text-white1")}>{title}</Text>
        {/* TO DO: Уважно дивись макет. Нема пiкдкресслення тексту Add today */}
        {isRightElement && <Text className={clsx("text-12", classNameTitle ?? "text-white1")}>{isRightElement}</Text>}
      </View>
      <View className="mt-[13px] items-left justify-center ">
        <Icon />
      </View>
      {/* TO DO: Уважно дивись макет. Нема вiдступу зверху вiд iконки */}
      <View className="flex-row items-center justify-left">
        <Text className={clsx("text-16", classNameTitle ?? "text-white1")}>
          {subtitle}
        </Text>
      </View>
      {/* TO DO: Уважно дивись макет. Нема вiдступу зверху до тексту */}
      <View className="flex-row items-center justify-between">
        <Text className={clsx("text-12", classNameTitle ?? "text-white1")}>
          {time}
        </Text>
        {/* TO DO: Уважно дивись макет. Нема пiкдкресслення тексту History */}
        {isHistory && (
          <Text className={clsx("text-12", classNameTitle ?? "text-white1")}>
            {isHistory}
          </Text>
        )}
      </View>
    </View>
  )
}

export default CardItemComponent