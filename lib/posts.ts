const API_URL = process.env.EXPO_PUBLIC_API_URL;
// retrieve_files;

const fetchPaginatedPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  return response.json();
};
export default fetchPaginatedPosts;
