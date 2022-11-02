import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { trpc } from "../utils/trpc";

const Test = () => {
  const hello = trpc.hello.useQuery({ text: "anuj, trpc se bol raha hu" });
  if (!hello.data) return <Text>Loading...</Text>;
  return (
    <View>
      <Text>{hello.data.message}</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
