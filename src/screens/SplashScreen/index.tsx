import React, { useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import SplashIcon from "assets/icons/splash.svg"
import { Text, View } from "react-native"
import { useNavigation, CommonActions } from "@react-navigation/native"

const SPLASH_DURATION = 1000

const SplashScreen: React.FC = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "MainTabs" }],
        })
      )
    }, SPLASH_DURATION)

    return () => clearTimeout(timer)
  }, [navigation])

  return (
    <SafeAreaView className="flex-1 bg-blue1 pl-[24px] pr-[24px]">
      <View className="flex-center justify-center items-center pt-[186px]">
        <SplashIcon/>
      </View>
      <View className="flex-center items-center">
        <Text className="text-22 text-white font-sans500">Pills Alert</Text>
      </View>
    </SafeAreaView>
  )
}

export default SplashScreen
