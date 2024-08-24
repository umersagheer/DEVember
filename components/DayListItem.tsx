import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

type DayListItemProps = {
  day: number;
};

function DayListItem({ day }: DayListItemProps) {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.card}>
        <Text style={styles.text}>D-{day}</Text>
      </Pressable>
    </Link>
  );
}

export default DayListItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.background,
    flex: 1,
    aspectRatio: 1,
    borderRadius: 10,
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: Colors.light.border,
    borderWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 25,
    color: "#fff",
    fontFamily: "MontserratSemiBold",
  },
});
