import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="singUp" />
      <Stack.Screen name="change_pass" />
      <Stack.Screen name="contact" />
      <Stack.Screen name="forgot_pass" />
      <Stack.Screen name="new_pass" />
      <Stack.Screen name="OTP" />
    </Stack>
  );
};

export default AuthLayout;
