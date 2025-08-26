import Card from "@/components/cards";
import fetchPaginatedPosts from "@/lib/posts";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, FlatList, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function Index() {
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPaginatedPosts,
  });

  const insets = useSafeAreaInsets();
  const data = [1, 2, 3, 4, 7, 8, 9, 12];

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        {query.isLoading ? (
          <View>
            <ActivityIndicator />
          </View>
        ) : (
          <FlatList
            data={query.data}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            contentContainerStyle={{
              paddingBottom: insets.bottom + 70,
            }}
            renderItem={({ item }) => (
              <View className="flex-1 items-center my-2">
                <Card />
              </View>
            )}
            keyExtractor={(item) => item.toString()}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
