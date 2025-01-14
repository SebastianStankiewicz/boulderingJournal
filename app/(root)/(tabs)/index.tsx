import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView showsVerticalScrollIndicator={false}
      contentContainerClassName="pb-32 px-7"
      >
        <View>
          <Text>Journal Page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
