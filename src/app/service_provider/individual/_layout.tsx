import { Stack } from "expo-router";
import React from "react";

const Individual_Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(Tabs)" />
    </Stack>
  );
};

export default Individual_Layout;
