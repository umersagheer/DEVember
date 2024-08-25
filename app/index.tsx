import DayListItem from "@components/DayListItem";
import { Colors } from "@/constants/Colors";
import { View, StyleSheet, FlatList } from "react-native";

const days = [...Array.from({ length: 24 }, (_, i) => i + 1).map((num) => num)];

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        contentContainerStyle={styles.listContent}
        numColumns={3}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => <DayListItem day={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContent: {
    gap: 10,
    backgroundColor: Colors.light.backgroundTint,
    padding: 10,
  },

  column: {
    gap: 10,
  },
});
