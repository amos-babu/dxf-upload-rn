import images from "@/constants/images";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const singIn = () => {
  const handleLogin = () => {};
  const handleSignUp = () => {};
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="flex-grow">
        <Image
          source={images.landingPage}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-gray-700">
            Welcome to Restate
          </Text>
          <Text className="text-3xl font-rubik-bold text-gray-900 text-center mt-2">
            {" "}
            Let's Get You Started
          </Text>
          <Text className="text-center mt-2 text-gray-500 font-rubik-medium">
            Login OR Sign Up to your account
          </Text>
          <View className="flex justify-center items-center">
            <TouchableOpacity
              onPress={handleSignUp}
              className="bg-white shadow-md shadow-zinc-500 rounded-full w-full py-4 mt-5"
            >
              <Text className="text-lg font-rubik-medium text-gray-900 ml-2 text-center">
                Sign Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleLogin}
              className="bg-white shadow-md shadow-zinc-500 rounded-full w-full py-4 mt-5"
            >
              <Text className="text-lg font-rubik-medium text-gray-900 ml-2 text-center">
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default singIn;
