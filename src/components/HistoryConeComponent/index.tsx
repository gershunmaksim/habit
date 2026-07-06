// React Native and Components
import React from "react"
import { View, Text } from "react-native"
import { SvgProps } from "react-native-svg"
//Libraries
//Hooks and Redux
//styles and Icons

export interface HistoryConeComponentProps {
  title: string
  subtitle: string
  Icon: React.FC<SvgProps>   
}

const HistoryConeComponent = ({
  title,
  subtitle,
  Icon,
}: HistoryConeComponentProps
) => {
  return (
   <View
    style={{
      backgroundColor: "#fff",
      borderRadius: 10,
      boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
      marginBottom: 20,
    }}
    className="flex-row items-center justify-between mx-[24px] py-[13px] pl-[16px] pr-[21px] rounded-10 border-1 border-white1">
      <View className="flex-row items-center">
        <View className="mr-[15px]">
          <Icon/>
        </View>
        <View>
          <Text className="text-gray1 font-sans500  text-16">{title}</Text>
        </View>
      </View>
      <View>
        <Text className="text-gray1 font-sans500 text-16">{subtitle}</Text>
      </View>
    </View>
  ) 
}

export default HistoryConeComponent