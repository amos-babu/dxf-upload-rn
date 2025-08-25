import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-4xl my-3 font-rubik">Welcome to Restate</Text>
      <Link className="text-2xl font-rubik-light my-2" href="/register">
        Sign In
      </Link>
      <Link className="text-2xl font-rubik-light my-2" href="/profile">
        Profile
      </Link>
      <Link className="text-2xl font-rubik-light my-2" href="/images/1">
        Images
      </Link>
      <Link className="text-2xl font-rubik-light my-2" href="/create">
        Create
      </Link>
      <Link className="text-2xl font-rubik-light my-2" href="/login">
        Login
      </Link>
    </View>
  );
}
