import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Detail() {
  const { body, userId, title, id } = useLocalSearchParams();
  return (
    <View>
      <Text>{body}</Text>
      <Text>{userId}</Text>
      <Text>{title}</Text>
      <Text>{id}</Text>
    </View>
  );
}
