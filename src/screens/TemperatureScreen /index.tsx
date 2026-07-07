// TO DO: Import не в тому мiсцi - все перевiрити, все не там де треба
import { useNavigation } from "@react-navigation/native"
import HeaderComponent from "components/HeaderComponent"
import React, { useState } from "react"
import { Button, InputAccessoryView, Pressable, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import FatArrowIcon from "assets/icons/fat-arrow.svg"
import ReloadIcon from "assets/icons/reload.svg"
import colors from "styles/colors"
import ToggleComponent from "components/ToggleComponent"
import TemperatureComponent from "components/TemperatureComponent"

const TemperatureScreen: React.FC = () => {
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
      {/* TO DO: Тут треба використати компонент LabelComponent, додаси пропс(я там теж лишу комент) */}
      <View className="pt-[22px]">
        <Text className="text-18 font-sans500 text-green1">Add temperature</Text>
      </View>
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
              {/* TO DO: text-14 нема в tailwind - наводишся, не пише що таке text-14 */}
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
                placeholderTextColor={colors.green1}
              />
            </View>
            <View className="">
              <View className="absolute top-[0px] right-0 border-1 w-[6px] h-[6px] rounded-full border-green1" />
              <View className="mr-[10px]">
                {/* TO DO: Стилi для символа цельсiй нема, нi сайза, нi ciмейства шрифта тощо*/}
                <Text className="text-green1">{"C"}</Text>
              </View>
            </View>
          </View>

         <View className="mt-[16px]">
          {/* TO DO: По-перше, бачу що робив чат-гпт. По-друге, винеси в компонент цю кнопку(все що починається з <Pressable>). Як видно, що це ШI: СТИЛI. Ти можеш питати в нього, тiльки робити як на макетi: закруглення краю блока, колір tailwind, паддiнги а не жостко задана висота h-14(так теж тiльки чат пише, ми пiкселi пишем, а не rem). Ну i зроби клiк, а то нема нажимання кнопки. */}
          <Pressable className="bg-blue-500 rounded-3xl h-14 items-center justify-center">
            {/* TO DO: Стилi сам зроби, тут тоже чат-гпт */}
            <Text className="text-white text-xl">
              Add
            </Text>
          </Pressable>
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
            {/* TO DO: Ну тут поки не буде в tailwimd text-14 = працювати не буде, теж тут не робить на даний момент */}
            <Text className="text-14 text-gray2 font-sans400 ml-[8px]">Last Updated: 7 March 10 Am</Text>
          </View>
        </View>
        {/* TO DO: Переглянь дизайн. Там вiдступ в 32px. А в тебе тут pt-[32], i блок перед цим ще marginBottom: 20. То зробиш щоб було як на макетi */}
        <View className="pt-[32px]">
          {/* TO DO: Тут треба використати компонент LabelComponent теж */}
          <Text className="text-18 font-sans500 text-green1">History</Text>
          {/* TO DO: Ну тут поки не буде в tailwimd text-14 = працювати не буде, теж тут не робить на даний момент */}
          <Text className="text-14 text-gray2 font-sans400 pt-[4px] pb-[20px]">Regular  measurements will help your doctor assess your condition correctly</Text>
        </View>

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
