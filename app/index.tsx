import RenderItem from "@/components/RenderItem";
import { useIndex } from "@/hooks/useIndex";
import { Button, FlatList, TextInput, View } from "react-native";

export default function Index() {
  const { actions, states } = useIndex();
  return (
    <View>
      <View style={{ flexDirection: "row", marginBottom: 12 }}>
        <TextInput
          onChangeText={actions.setSearchText}
          value={states.searchText}
          style={{
            width: 200,
            padding: 8,
            borderWidth: 2,
            borderColor: "black",
            borderRadius: 2,
            marginRight: 8,
          }}
        />
        <Button title="Search" onPress={actions.onPressSearch} />
      </View>

      <FlatList
        data={states.listUser}
        renderItem={({ item }) => (
          <RenderItem
            id={item.id}
            title={item.title}
            onPress={() => actions.onPressList(item)}
          />
        )}
      />
    </View>
  );
}
