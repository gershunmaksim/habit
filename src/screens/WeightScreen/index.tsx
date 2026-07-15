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
import { mockWeightHistoryData } from "data/mockData"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
//Libraries
//Hooks and Redux
import { useDispatch } from "react-redux";
import { setWeight } from "store/auth/slice";
//Helpers and Types
//styles and Icons
import FatArrowIcon from "assets/icons/fat-arrow.svg"
import ReloadIcon from "assets/icons/reload.svg"
import colors from "styles/colors"
// TO DO: Import не на мiсцях, перевiрити
import { useTranslation } from "react-i18next"
import { useTypedSelector } from "store"


const WeightScreen: React.FC = () => {
  const { weight } = useTypedSelector((store) => store.auth)
  const [selectedWeight, setSelectedWeight] = useState(weight)
  
  const [isWeight, setIsWeight] = useState<string>("60")
  const [isValue, setIsValue] = useState(false)
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const handleGoBack = () => {
    navigation.goBack()
  }
  const handleToggleReminder = () => {
    setIsValue(val => !val)
  }
  const handleAddWeight = () => {
    // TO DO: Убрати консоль
    console.log("Pressed", selectedWeight);
    dispatch(setWeight(selectedWeight));
    navigation.goBack()
  };
  const { t } = useTranslation()
  return (
    <SafeAreaView className="flex-1 bg-white px-[24px]">
      <HeaderComponent title={t("weight2")} isArrowLeft onPressArrowLeft={handleGoBack} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} enableOnAndroid={true}
      keyboardShouldPersistTaps="handled">
        <LabelComponent classNameTitle="text-18 font-sans500 text-green1" title={t("add_weight")}/>
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
                value={selectedWeight}
                placeholder="60"
                onChangeText={setSelectedWeight}
                placeholderTextColor={colors.green1}
              />
            </View>
            <View className="ml-[10]">
              <Text className="text-18 font-sans400 text-green1">{t("kg")}</Text>
            </View>
          </View>

         <View className="mt-[16px]">
       
          <ButtonComponent
           title={t("add")}
           onPress={handleAddWeight} />
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
          data={mockWeightHistoryData}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <TemperatureComponent
              title={item.weight}
              subtitle={item.timeChangedWeight}
              Icon={FatArrowIcon}
            />
          )}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default WeightScreen


