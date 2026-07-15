// React Native and Components
import React from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import HeaderComponent from "components/HeaderComponent"
import HistoryConeComponent from "components/HistoryConeComponent"
//Libraries
import moment from "moment"
// TO DO: Убрати консоль
console.log(moment().format("YYYY-MM-DD"));
//Hooks and Redux
//styles and Icons
import GreenConeIcon from "assets/icons/greenCone.svg"
import RedConeIcon from "assets/icons/redCone.svg"
// TO DO: Import не на мiсцях, перевiрити
import { useTranslation } from "react-i18next"

const StatsScreen: React.FC = () => {
  const { t } = useTranslation()
  return (
    <SafeAreaView className="flex-1 bg-white px-[24px]">
      <HeaderComponent 
        title={t("history")}
        />
      <HistoryConeComponent
        Icon={GreenConeIcon}
        title={t("march")}
        subtitle={"9.0 MMOL"}
      />      
      <HistoryConeComponent
        Icon={RedConeIcon}
        title={t("march")}
        subtitle={"9.0 MMOL"}
      />
    </SafeAreaView>
  )
}

export default StatsScreen
