// React Native and Components
import { useNavigation } from "@react-navigation/native"
import HeaderComponent from "components/HeaderComponent"
import React, { useState } from "react"
import { FlatList, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import ToggleComponent from "components/ToggleComponent"
import TemperatureComponent from "components/TemperatureComponent"
import ButtonComponent from "components/ButtonComponent"
import LabelComponent from "components/LabelComponent"
import { mockPressureHistoryData, mockWeightHistoryData } from "data/mockData"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
//Libraries
//Hooks and Redux
//Helpers and Types
//styles and Icons
import FatArrowIcon from "assets/icons/fat-arrow.svg"
import ReloadIcon from "assets/icons/reload.svg"
import colors from "styles/colors"
import { useTranslation } from "react-i18next"

const PressureScreen: React.FC = () => {
  const [isPressureUp, setIsPressureUp] = useState<string>("120")
  const [isValueUp, setIsValueUp] = useState(false)
  const [isPressureDown, setIsPressureDown] = useState<string>("80")
  const [isValueDown, setIsValueDown] = useState(false)
  const navigation = useNavigation()
  const handleGoBack = () => {
    navigation.goBack()
  }
  const handleToggleReminder = () => {
    setIsValueUp(val => !val)
  }
  const { t } = useTranslation()
  return (
    <SafeAreaView className="flex-1 bg-white px-[24px]">
      <HeaderComponent title={t("pressure")} isArrowLeft onPressArrowLeft={handleGoBack} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} enableOnAndroid={true}
      keyboardShouldPersistTaps="handled">
        <LabelComponent classNameTitle="text-18 font-sans500 text-green1" title={t("add_pressure")}/>
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
              <Text className="text-14 text-gray1 font-sans700">{t("now")}</Text>
            </View>
            <View>
              <FatArrowIcon/>
            </View>
          </View>

          <View className="flex-row border-b border-gray-300 mt-[16px]">
            <View className="flex-1">
              <TextInput
                className="w-full text-20 font-sans400 text-green1" 
                placeholder="120"
                value={isPressureUp}
                onChangeText={(isPressure) => setIsPressureUp(isPressure)}
                placeholderTextColor={colors.green1}
              />
            </View>
          </View>

          <View className="flex-row border-b border-gray-300 mt-[16px]">
            <View className="flex-1">
              <TextInput
                className="w-full text-20 font-sans400 text-green1" 
                placeholder="80"
                value={isPressureDown}
                onChangeText={(isPressure) => setIsPressureDown(isPressure)}
                placeholderTextColor={colors.green1}
              />
            </View>         
          </View>

         <View className="mt-[16px]">
          <ButtonComponent title={t("add")} />
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
              value={isValueUp}
              onChange={handleToggleReminder}
            />
            <Text className="text-18 font-sans500 text-green1 ml-[12px]">{t("remind_to_measure")}</Text>
          </View>
          <View className="flex-row items-center justify-between mt-[20px]">
            <View>
              <Text className="text-14 text-green1 font-sans400">{t("everyday_reminder")}</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-20 text-green1 font-sans400 mr-[6px]">{t("am")}</Text>
              <FatArrowIcon/>
            </View>
          </View>
          <View className="flex-row items-center pt-[23px]">
            <ReloadIcon/>
            <Text className="text-14 text-gray2 font-sans400 ml-[8px]">{t("last_updated_march_am")}</Text>
          </View>
        </View>
        <LabelComponent
          classNameTitle="text-18 font-sans500 text-green1"
          title={t("history")}
          className="mt-[12px]"
        />

        <FlatList
          data={mockPressureHistoryData}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <TemperatureComponent
              title={item.pressure}
              subtitle={item.timeChangedPressure}
              Icon={FatArrowIcon}
            />
          )}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default PressureScreen
