import HeaderComponent from "components/HeaderComponent"
import React from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import FatArrowIcon from "assets/icons/fat-arrow.svg"
import SyringeIcon from "assets/icons/syringe.svg"
import BlueConeIcon from "assets/icons/blue-cone.svg"
import PlusIcon from "assets/icons/plus.svg"
import CalendarStrip from "components/CalendarComponent/CalendarStrip"
import { t } from "i18next"

const CalendarScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-white pl-[24px] pr-[24px]">
      <CalendarStrip
        events={{
          "2026-07-23":2,
          "2026-07-24":3,
          "2026-07-25":1,
        }}
        onChange={(date)=>{
          console.log(date)
        }}
      />
      <View className="flex-row items-center justify-between">
        <View>
          <HeaderComponent title={t("thusday_october")}/>
        </View>
        <View className="flex-row items-center">
          <Text className="color-gray1 text-14 font-sans400">{t("today")}</Text>
          <FatArrowIcon/>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
        }}
        className="flex-row items-center justify-between mt-[20px] py-[13px] px-[18px] rounded-10 border-1 border-white1">
          <View className="flex-row items-center">
            <View className="mr-[15px]">
              <SyringeIcon/>
            </View>
            <View>
              <Text className="text-gray2 font-sans500  text-16">{t("gestational")}</Text>
            </View>
          </View>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
        }}
        className="flex-row items-center justify-between mt-[20px] py-[13px] px-[18px] rounded-10 border-1 border-white1">
          <View className="flex-row items-center">
            <View className="mr-[15px]">
              <BlueConeIcon/>
            </View>
            <View>
              <Text className="text-gray2 font-sans500 text-16">
                <Text className="text-mainBlack">{t("glucose")}</Text>
                  {t("(5 mol at 10:00 PM)")}
              </Text>
            </View>
          </View>
      </View>
      <View className="bg-blue1 w-[56px] h-[56px] radius rounded-full absolute bottom-[8px] right-[24px] justify-center items-center">  
        <PlusIcon/>
      </View>  
    </SafeAreaView>
  )
}

export default CalendarScreen
