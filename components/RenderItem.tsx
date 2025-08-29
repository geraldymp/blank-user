import { IRenderItem } from "@/types/IRenderItem";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const _RenderItem: React.FC<IRenderItem> = ({ id, title, onPress }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text onPress={onPress}>{id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "black",
  },
});

const RenderItem = React.memo(_RenderItem);
export default RenderItem;
