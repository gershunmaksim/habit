import { useNavigation } from "@react-navigation/native"
import HeaderComponent from "components/HeaderComponent"
import React from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const LanguagesScreen: React.FC = () => {
  const navigation = useNavigation()
  const handleGoBack = () => {
    navigation.goBack()
  }
  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderComponent title="Languages" isArrowLeft onPressArrowLeft={handleGoBack} />
    </SafeAreaView>
  )
}

export default LanguagesScreen
