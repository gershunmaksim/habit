// React Native and Components
import { useNavigation } from "@react-navigation/native"
import HeaderComponent from "components/HeaderComponent"
import React, { useState } from "react"
import { Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import ToggleComponent from "components/ToggleComponent"
import TemperatureComponent from "components/TemperatureComponent"
import ButtonComponent from "components/ButtonComponent"
import LabelComponent from "components/LabelComponent"
//Libraries
//Hooks and Redux
//Helpers and Types
//styles and Icons
import FatArrowIcon from "assets/icons/fat-arrow.svg"
import ReloadIcon from "assets/icons/reload.svg"
import colors from "styles/colors"

const TemperatureScreen: React.FC = () => {
  const [isTemperature, setIsTemperature] = useState<string>("36.6")
  const [isValue, setIsValue] = useState(false)
  const navigation = useNavigation()
  const handleGoBack = () => {
    navigation.goBack()
  }
  const handleToggleReminder = () => {
    setIsValue(val => !val)
  }
  return (
    <SafeAreaView className="flex-1 bg-white px-[24px]">
      <HeaderComponent title="Temperature" isArrowLeft onPressArrowLeft={handleGoBack} />
      <LabelComponent classNameTitle="text-18 font-sans500 text-green1" title="Add temperature"/>
      <View 
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
          marginBottom: 20,
        }}
        className="justify-between p-[20px] mt-[16px] rounded-10 border-1 border-white1">
          <View className="flex-row items-center justify-between w-full">
            <View>
              <Text className="text-14 text-gray1 font-sans700">Now</Text>
            </View>
            <View>
              <FatArrowIcon/>
            </View>
          </View>

          <View className="flex-row border-b border-gray-300 mt-[16px]">
            <View className="flex-1">
              <TextInput
                className="w-full text-20 font-sans400 text-green1" 
                placeholder="36,6"
                value={isTemperature}
                onChangeText={(isTemperature) => setIsTemperature(isTemperature)}
                placeholderTextColor={colors.green1}
              />
            </View>
            <View className="">
              <View className="absolute top-[0px] right-0 border-1 w-[6px] h-[6px] rounded-full border-green1" />
              <View className="mr-[10px]">
                <Text className="text-14 font-sans400 text-green1">{"C"}</Text>
              </View>
            </View>
          </View>

         <View className="mt-[16px]">
       
          <ButtonComponent title={"Add"} />
        </View>
        </View>
        <View 
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
            marginBottom: 20,
          }}
          className="justify-between p-[20px] mt-[16px] rounded-10 border-1 border-white1">
          <View className="flex-row items-center">
            <ToggleComponent
              value={isValue}
              onChange={handleToggleReminder}
            />
            <Text className="text-18 font-sans500 text-green1 ml-[12px]">Remind to measure</Text>
          </View>
          <View className="flex-row items-center justify-between mt-[20px]">
            <View>
              <Text className="text-14 text-green1 font-sans400">Everyday Reminder</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-20 text-green1 font-sans400 mr-[6px]">10 AM</Text>
              <FatArrowIcon/>
            </View>
          </View>
          <View className="flex-row items-center pt-[23px]">
            <ReloadIcon/>
            <Text className="text-14 text-gray2 font-sans400 ml-[8px]">Last Updated: 7 March 10 Am</Text>
          </View>
        </View>
        <LabelComponent
          classNameTitle="text-18 font-sans500 text-green1"
          title="History"
          className="mt-[12px]"
          subtitle="Regular  measurements will help your doctor assess your condition correctly"
        />

        <TemperatureComponent
          title={"36,6"}
          subtitle={"8 Oct 1:29 PM"}
          Icon={FatArrowIcon}
        />
        <TemperatureComponent
          title={"37,0"}
          subtitle={"9 Oct 1:29 PM"}
          Icon={FatArrowIcon}
        />
    </SafeAreaView>
  )
}

export default TemperatureScreen
