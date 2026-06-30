import { RootStackScreenProps } from "navigation/types"
import React from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

type Props = RootStackScreenProps<"home">

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const handleGoNextScreen = () => {
    // 
  }
  return (
    <SafeAreaView className="flex-1 justify-between bg-white">
      <View className="flex-1 items-center justify-center mt-[0px]">
        <Text className="text-22 text-blue-600">Health monitoring</Text>
      </View>
    </SafeAreaView>
  )
}
export default HomeScreen