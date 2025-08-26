const API_URL = process.env.API_URL;
// retrieve_files;

const fetchPaginatedPosts = async () => {
  const response = await fetch(`${API_URL}/retrieve_files`);
  const posts = await response.json();
  return response;
};
export default fetchPaginatedPosts;
