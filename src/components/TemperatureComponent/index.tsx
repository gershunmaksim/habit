// React Native and Components
import React from "react"
import { View, Text } from "react-native"
import { SvgProps } from "react-native-svg"
import FatArrowIcon from "assets/icons/fat-arrow.svg"
//Libraries
//Hooks and Redux
//styles and Icons

export interface TemperatureComponentProps {
  title: string
  subtitle: string
  Icon: React.FC<SvgProps>   
}

const TemperatureComponent = ({
  title,
  subtitle,
  Icon,
}: TemperatureComponentProps
) => {
  return (
   <View
    style={{
      backgroundColor: "#fff",
      borderRadius: 10,
      boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
      marginBottom: 20,
    }}
    className=" py-[13px] pl-[16px] pr-[21px] rounded-10 border-1 border-white1">
    <View className="flex-row justify-between">
      <View>
        <Text className="text-20 text-green1">{title}</Text>
      </View>
      <View className="flex-row items-center justify-between">
        <Text className="text-14 font-sans400 text-green1 mr-[18px]">{subtitle}</Text>
        <Icon/>
      </View>
    </View>
  </View>
  ) 
}

export default TemperatureComponent