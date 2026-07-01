import React from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const CalendarScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center">
        <Text className="text-base text-gray-500">Calendar</Text>
      </View>
    </SafeAreaView>
  )
}

export default CalendarScreen
