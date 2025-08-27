import axios from "axios";
import { PostsProps } from "./types";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

const fetchPaginatedPosts = async ({ pageParams }: { pageParams: string }) => {
  try {
    const response = await axios.get<PostsProps>(pageParams);
    return response.data;
  } catch (error) {
    console.log("Error fetching post: ", error);
    throw error;
  }
};
export default fetchPaginatedPosts;
