import Card from "@/components/cards";
import Loading from "@/components/loading";
import { PostsProps } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { FlatList, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
// retrieve_files;

export default function Index() {
  const [data2, setData2] = useState({});
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get<PostsProps>(`${API_URL}/retrieve_files`);
      setData2(response.data);
      return response.data.data.files;
    },
  });

  console.log(data2);

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={data}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            contentContainerStyle={{
              paddingBottom: insets.bottom + 70,
            }}
            renderItem={({ item }) => (
              <View className="flex-1 items-center my-2">
                <Card posts={item} />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
