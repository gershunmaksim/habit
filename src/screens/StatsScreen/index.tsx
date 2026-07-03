// React Native and Components
import React from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import HeaderComponent from "components/HeaderComponent"
import HistoryConeComponent from "components/HistoryConeComponent"
//Libraries
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
      <HistoryConeComponent
        Icon={GreenConeIcon}
        title={"21 March 12:54"}
        subtitle={"9.0 MMOL"}
      />      
      <HistoryConeComponent
        Icon={RedConeIcon}
        title={"21 March 12:54"}
        subtitle={"9.0 MMOL"}
      />
    </SafeAreaView>
  )
}

export default StatsScreen
