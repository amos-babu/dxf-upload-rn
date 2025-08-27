import Card from "@/components/cards";
import fetchPaginatedPosts from "@/lib/posts";
import { FilesProp } from "@/lib/types";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
// retrieve_files;

export default function Index() {
  const [posts, setPosts] = useState<FilesProp[]>([]);
  // const { data, isLoading, isError, error } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: async () => {
  //     const response = await axios.get<PostsProps>(`${API_URL}/retrieve_files`);
  //     setData2(response.data);
  //     return response.data.data.files;
  //   },
  // });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const result = await fetchPaginatedPosts();
        setPosts(result.data.files);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, []);

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        {/* {isLoading ? (
          <Loading />
        ) : ( */}
        <FlatList
          data={posts}
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
        {/* )} */}
      </View>
    </SafeAreaView>
  );
}
