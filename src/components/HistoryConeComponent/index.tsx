// React Native and Components
import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
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
    className="flex-row items-center justify-between mx-[24px] py-[13px] pl-[16px] pr-[21px] rounded-[10px] border-[1px] border-white1">
      {/* TO DO: В Tailwind винесено ширину бордера, закруглення тощо. Писати можна тепер просто border-1, а не border-[1px] */ }
      <View className="flex-row items-center">
        <View className="mr-[15px]">
          <Icon/>
        </View>
        <View>
          {/* TO DO: Жирнiсть не як на макетi */}
          <Text className="text-gray1 text-16">{title}</Text>
        </View>
      </View>
      <View>
        {/* TO DO: Жирнiсть не як на макетi */}
        <Text className="text-gray1 text-16">{subtitle}</Text>
      </View>
    </View>
  ) 
}

export default HistoryConeComponent