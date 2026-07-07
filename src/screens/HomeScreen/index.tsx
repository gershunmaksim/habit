// React Native and Components
import React from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import HeaderComponent from "components/HeaderComponent"
//Libraries
import { TabScreenProps } from "navigation/types"
import CardItemComponent from "components/CardItemComponent"
//Hooks and Redux
//styles and Icons
import SmileIcon from "assets/img/smile.svg"
import FootstepIcon from "assets/img/footstep.svg"
import ThermometerIcon from "assets/img/thermometer.svg"
import HeartIcon from "assets/img/heart.svg"
import { useNavigation } from "@react-navigation/native"

type Props = TabScreenProps<"home">

const HomeScreen: React.FC<Props> = () => {
  const navigation = useNavigation()
  const handleGoNextScreen = () => {
    // 
  }
  const handleGoTemperatureScreen = () => {
    navigation.navigate("temperature")
  }
  return (
    <SafeAreaView className="flex-1 bg-white1 px-[24px]">
        <HeaderComponent 
         title={"Health monitoring"}
         isArrowLeft
         />

      <View className="flex-row align-center flex-wrap gap-[15px] mt-[24px]">
        <CardItemComponent 
          title={"MOOD"} 
          Icon={SmileIcon}
          subtitle={"Satisfied"} 
          time={"Yesterday"} 
          isRightElement={"Add today"} 
          isHistory={"History"}
        />
        <CardItemComponent 
          title={"WEIGHT"} 
          Icon={FootstepIcon}
          subtitle={"58 kg"} 
          time={"last update 3d"}
          classNameCard={"bg-orange1"}
          classNameTitle={"text-mainBlack"}
          classNameSubtitle={"text-mainBlack"}
          classNameTime={"text-mainBlack"}
          classNameHistory={"text-mainBlack"}
        />
        <CardItemComponent 
          title={"TEMPERATURE"} 
          Icon={ThermometerIcon}
          subtitle={"36,6°C"} 
          time={"last update 3d"} 
          classNameCard={"bg-orange1"}
          classNameTitle={"text-mainBlack"}
          classNameSubtitle={"text-mainBlack"}
          classNameTime={"text-mainBlack"}
          classNameHistory={"text-mainBlack"}
          onPress={handleGoTemperatureScreen}
        />
        <CardItemComponent 
          title={"BLOOD PRESSURE"} 
          Icon={HeartIcon}
          subtitle={"120/80"} 
          time={"last update 3m"} 
        />
      </View>
      
    </SafeAreaView>
  )
}
export default HomeScreen