// React Native and Components
import React from "react"
import { useTranslation } from "react-i18next"
import { SafeAreaView } from "react-native-safe-area-context"
import HeaderComponent from "components/HeaderComponent"
import HistoryConeComponent from "components/HistoryConeComponent"
//Libraries
import moment from "moment"
//Hooks and Redux
//styles and Icons
import GreenConeIcon from "assets/icons/greenCone.svg"
import RedConeIcon from "assets/icons/redCone.svg"

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
