// React Native and Components
import React from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
//Libraries
import HeaderComponent from "components/HeaderComponent"
//Hooks and Redux
//styles and Icons
import GreenConeIcon from "assets/icons/greenCone.svg"
import RedConeIcon from "assets/icons/redCone.svg"

const StatsScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderComponent 
         title={"History"}
         />
      <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 10,
        boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
        marginBottom: 20,
      }}
      className="flex-row items-center justify-between mx-[24px] py-[13px] pl-[16px] pr-[21px] rounded-[10px] border-[1px] border-white1">
        <View className="flex-row items-center">
          <View className="mr-[15px]">
            <GreenConeIcon/>
          </View>
          <View>
            <Text className=" text-gray1 text-16">21 March 12:54</Text>
          </View>
        </View>
        <View>
          <Text className=" text-gray1 text-16">9.0 MMOL</Text>
        </View>
      </View>
      
      <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 10,
        boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
        marginBottom: 20,
      }}
      className="flex-row items-center justify-between mx-[24px] py-[13px] pl-[16px] pr-[21px] rounded-[10px] border-[1px] border-white1">
        <View className="flex-row items-center">
          <View className="mr-[15px]">
            <RedConeIcon/>
          </View>
          <View>
            <Text className=" text-gray1 text-16">21 March 12:54</Text>
          </View>
        </View>
        <View>
          <Text className=" text-gray1 text-16">9.0 MMOL</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default StatsScreen
