import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from 'react-native';

export default function StartPage() {
  return (
    <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="black" />
    </View>
  )
}
