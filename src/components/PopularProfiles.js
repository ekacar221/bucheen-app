import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const profiles = [
  {
    name: "Javar Saripun",
    image: require("../../assets/images/Group 9079.png"),
    aspectRatio: 331 / 489,
  },
  {
    name: "Fausiah Fera",
    image: require("../../assets/images/Group 9077.png"),
    aspectRatio: 328 / 521,
  },
  {
    name: "Shreryl Olap",
    image: require("../../assets/images/Group 9078.png"),
    aspectRatio: 328 / 521,
  },
];

function ProfileCard({ profile, index, isWeb }) {
  const [hovered, setHovered] = useState(false);

  return (
    <View
      style={[
        styles.card,
        isWeb && styles.cardWeb,
        isWeb && { marginTop: index * 40 },
        hovered && styles.cardHovered,
      ]}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        source={profile.image}
        style={[styles.cardImage, { aspectRatio: profile.aspectRatio }]}
        resizeMode="cover"
      />
    </View>
  );
}

export default function PopularProfiles() {
  const { width } = useWindowDimensions();
  const isWeb = width >= 768;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Most Popular In This Week</Text>
      <Text style={styles.subtitle}>
        There are so many platforms from this Pokan to make a task manager
        manage all your time.
      </Text>

      <View style={[styles.cards, isWeb && styles.cardsWeb]}>
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            profile={profile}
            index={index}
            isWeb={isWeb}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF5F5",
    paddingHorizontal: 80,
    paddingVertical: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1A1A2E",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 48,
  },
  cards: { flexDirection: "column" },
  cardsWeb: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  card: {
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
    transition: "all 0.3s ease",
  },
  cardWeb: {
    width: "28%",
    marginHorizontal: 12,
  },
  cardHovered: {
    transform: [{ translateY: -8 }],
  },
  cardImage: {
    width: "100%",
  },
});
