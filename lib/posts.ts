const API_URL = process.env.EXPO_PUBLIC_API_URL;

const fetchPaginatedPosts = async () => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/retrieve_files`);
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log("Error fetching post: ", error);
    throw error;
  }
};
export default fetchPaginatedPosts;
