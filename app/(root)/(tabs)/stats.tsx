import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const stats = () => {
  return (
    <SafeAreaView className="h-full bg-primary-100">
      <ScrollView showsVerticalScrollIndicator={false}
      contentContainerClassName="pb-32 px-7"
      >
        <View>
          <Text>Stats page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default stats