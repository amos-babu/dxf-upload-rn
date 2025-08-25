import Card from "@/components/cards";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <FlatList
          data={[1, 2, 3, 4, 7, 8, 9, 12]}
          renderItem={({ item }) => (
            <View className="flex">
              <Card />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
