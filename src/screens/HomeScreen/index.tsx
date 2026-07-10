// React Native and Components
import React from "react"
import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import HeaderComponent from "components/HeaderComponent"
import CardItemComponent from "components/CardItemComponent"
//Libraries
//Hooks and Redux
import { useNavigation } from "@react-navigation/native"
//Helpers and Types
import { TabScreenProps } from "navigation/types"
//styles and Icons
import SmileIcon from "assets/img/smile.svg"
import FootstepIcon from "assets/img/footstep.svg"
import ThermometerIcon from "assets/img/thermometer.svg"
import HeartIcon from "assets/img/heart.svg"
import { useTranslation } from "react-i18next"

type Props = TabScreenProps<"home">

const HomeScreen: React.FC<Props> = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()

  const handleGoTemperatureScreen = () => {
    navigation.navigate("temperature")
  }
  const handleGoWeightScreen = () => {
    navigation.navigate("weight")
  }
  const handleGoPressureScreen = () => {
    navigation.navigate("pressure")
  }
  return (
    <SafeAreaView className="flex-1 bg-white1 px-[24px]">
        <HeaderComponent 
         title={t("health_monitoring")}
         isArrowLeft
         />

      <View className="mt-[24px] gap-y-[15px]">
      
      {/* Ряд 1 */}
      <View className="flex-row gap-x-[15px] items-stretch">
        <CardItemComponent 
          title={t("mood")} 
          Icon={SmileIcon}
          subtitle={t("satisfied")} 
          time={t("yesterday")} 
          isRightElement={t("add_today")} 
          isHistory={t("history")}
        />
        <CardItemComponent 
          title={t("weight")}
          Icon={FootstepIcon}
          subtitle={t("kg")} 
          time={t("last_update_d")}
          classNameCard="bg-orange1"
          classNameTitle="text-mainBlack"
          classNameSubtitle="text-mainBlack"
          classNameTime="text-mainBlack"
          classNameHistory="text-mainBlack"
          onPress={handleGoWeightScreen}
        />
      </View>
      <View className="flex-row gap-x-[15px] items-stretch">
        <CardItemComponent 
          title={t("temperature")} 
          Icon={ThermometerIcon}
          subtitle={"36,6°C"} 
          time={t("last_update_d")} 
          classNameCard="bg-orange1"
          classNameTitle="text-mainBlack"
          classNameSubtitle="text-mainBlack"
          classNameTime="text-mainBlack"
          classNameHistory="text-mainBlack"
          onPress={handleGoTemperatureScreen}
        />
        <CardItemComponent 
          title={t("blood_pressure")} 
          Icon={HeartIcon}
          subtitle={"120/80"} 
          time={t("last_update_m")} 
          onPress={handleGoPressureScreen}
        />
      </View>

    </View>
      
    </SafeAreaView>
  )
}
export default HomeScreen