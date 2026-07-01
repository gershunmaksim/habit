import { RootStackScreenProps } from "navigation/types"
import React from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import SmileIcon from "assets/img/smile.svg"
import FootstepIcon from "assets/img/footstep.svg"
import ThermometerIcon from "assets/img/thermometer.svg"
import HeartIcon from "assets/img/heart.svg"
import CardItemComponent from "components/CardItemComponent"

type Props = RootStackScreenProps<"home">

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const handleGoNextScreen = () => {
    // 
  }
  return (
    <SafeAreaView className="flex-1 bg-white1">
      <View className="items-left  mt-[px]">
        <Text className="text-18 text-green1">Health monitoring</Text>
      </View>

      <View className="flex-row align-center justify-between flex-wrap gap-[15px] px-[24px]">
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
        />
        <CardItemComponent 
          title={"TEMPERATURE"} 
          Icon={ThermometerIcon}
          subtitle={"36,6°C"} 
          time={"last update 3d"} 
          classNameCard={"bg-orange1"}
          classNameTitle={"text-mainBlack"}
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