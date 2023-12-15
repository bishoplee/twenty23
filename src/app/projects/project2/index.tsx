import { Stack } from "expo-router"
import { Text, View } from "react-native"

const Project = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Project 2" }} />
      <Text>Project 2</Text>
    </View>
  )
}

export default Project