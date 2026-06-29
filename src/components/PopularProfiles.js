import { useState } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

const profiles = [
  {
    name: "Javar Saripun",
    description:
      "A man who is ideal for all women. Javar is very handsome and attractive with a very friendly and kind nature.",
    bgColor: "#FFE4E1",
  },
  {
    name: "Fausiah Fera",
    description:
      "Fera is a student from one of the famous universities in Tokyo and she is a very famous and very beautiful woman.",
    bgColor: "#E8E0FF",
  },
  {
    name: "Shreryl Olap",
    description:
      "Olap is a very sweet woman with curly and blonde hair which makes her very beautiful and sweet.",
    bgColor: "#FFF3CD",
  },
];

// Tek kart componenti - hover state burada yönetilir
function ProfileCard({ profile, index, isWeb }) {
  const [hovered, setHovered] = useState(false);

  return (
    <View
      style={[
        styles.card,
        isWeb && styles.cardWeb,
        // Orta kart biraz aşağıda
        isWeb && index === 1 && { marginTop: 40 },
        // Hover efekti
        hovered && styles.cardHovered,
      ]}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* AVATAR ALANI */}
      <View style={[styles.avatar, { backgroundColor: profile.bgColor }]} />

      {/* İSİM */}
      <Text style={styles.name}>{profile.name}</Text>

      {/* AÇIKLAMA */}
      <Text style={styles.description}>{profile.description}</Text>
    </View>
  );
}

export default function PopularProfiles() {
  const { width } = useWindowDimensions();
  const isWeb = width >= 768;

  return (
    <View style={styles.container}>
      {/* BAŞLIK */}
      <Text style={styles.title}>Most Popular In This Week</Text>
      <Text style={styles.subtitle}>
        There are so many platforms from this Pokan to make a task manager
        manage all your time.
      </Text>

      {/* KARTLAR */}
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
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    transition: "all 0.3s ease",
  },
  cardWeb: {
    width: "30%",
    marginHorizontal: 12,
  },
  // Hover durumunda yukarı kalk
  cardHovered: {
    transform: [{ translateY: -8 }],
    boxShadow: "0px 12px 24px rgba(251, 146, 60, 0.15)",
  },
  avatar: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A1A2E",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 22,
  },
});
