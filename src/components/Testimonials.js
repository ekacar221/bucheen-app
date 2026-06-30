import { useState } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

const testimonials = [
  {
    name: "Tasha Wijayanti",
    location: "Curug",
    comment:
      "This Bucheen is so cool, I found the partner I wanted. and it's very easy to use and steady for bcheen. cheers and hopefully many other people can find their partner here",
    rating: 5,
  },
  {
    name: "Sizuka engkol",
    location: "Indonesia",
    comment:
      "Very interesting services are provided to customers, access is very fast and we can also see the development of our partners. and the information provided is accurate and genuine.",
    rating: 5,
  },
  {
    name: "Gundam gandim",
    location: "Bulgarian",
    comment:
      "It's crazy that this application can make me find my soul mate very easily and quickly. the information contained in this buceen is very accurate and really real, not a hoax",
    rating: 5,
  },
];

function TestimonialCard({ item, isWeb }) {
  const [hovered, setHovered] = useState(false);

  return (
    <View
      style={[
        styles.card,
        isWeb && styles.cardWeb,
        hovered && styles.cardHovered,
      ]}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <View style={styles.header}>
        <View style={styles.avatar} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.location}>{item.location}</Text>
        </View>
      </View>

      <Text style={styles.comment}>{item.comment}</Text>

      <Text style={styles.stars}>{"★".repeat(item.rating)}</Text>
    </View>
  );
}

export default function Testimonials() {
  const { width } = useWindowDimensions();
  const isWeb = width >= 768;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What Our Customers{"\n"}Have To Say</Text>
      <Text style={styles.subtitle}>
        Here's what our customers say with Bucheen
      </Text>

      <View style={[styles.cards, isWeb && styles.cardsWeb]}>
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} item={item} isWeb={isWeb} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 80,
    paddingVertical: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1A1A2E",
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 44,
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
    justifyContent: "space-between",
  },
  card: {
    borderWidth: 1,
    borderColor: "#F3F4F6",
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    transition: "all 0.3s ease",
  },
  cardWeb: { width: "30%" },
  cardHovered: {
    transform: [{ translateY: -8 }],
    borderColor: "#FF6B6B",
    boxShadow: "0px 12px 24px rgba(255, 107, 107, 0.15)",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#D1D5DB",
    marginRight: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1A1A2E",
  },
  location: {
    fontSize: 13,
    color: "#6B7280",
  },
  comment: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 22,
    marginBottom: 16,
  },
  stars: {
    fontSize: 18,
    color: "#FBBF24",
  },
});
