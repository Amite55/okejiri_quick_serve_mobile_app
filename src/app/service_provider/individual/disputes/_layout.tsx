import { Stack } from "expo-router";
import React from "react";

const Disputes_Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        // tabBarHideOnKeyboard: true,
      }}
    >
      <Stack.Screen name="my_disputes" />
      <Stack.Screen name="disputes_status" />
      <Stack.Screen name="dispute_review" />
      <Stack.Screen name="dispute_appeal" />
    </Stack>
  );
};

export default Disputes_Layout;
