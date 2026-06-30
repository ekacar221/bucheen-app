import { Heart, Search, UserRound } from "lucide-react-native";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

export default function HowItWorks() {
  const { width } = useWindowDimensions();
  const isWeb = width >= 768;

  const steps = [
    {
      Icon: Search,
      text: "Find your dating relationship in app and waiting until you get a notification. have a good relationship its started",
    },
    {
      Icon: Heart,
      text: "Dating with benefits and you redefine the expectations of a perfect relationship with your partner",
    },
    {
      Icon: UserRound,
      text: "Ideal relationship makes your online relationship run more smoothly using app",
    },
  ];

  return (
    <View style={[styles.container, isWeb && styles.containerWeb]}>
      <View style={[styles.content, isWeb && styles.contentWeb]}>
        <Text style={styles.title}>
          How It Works To Find{"\n"}Your Relationship
        </Text>

        {steps.map((step, index) => (
          <View key={index} style={styles.step}>
            <View style={styles.iconBox}>
              <step.Icon size={18} color="#FF6B6B" />
            </View>
            <Text style={styles.stepText}>{step.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
    padding: 24,
    paddingTop: 40,
  },
  containerWeb: {
    paddingHorizontal: 80,
    paddingVertical: 60,
  },
  // İçerik sola yaslı
  content: { width: "100%" },
  contentWeb: { width: "50%" },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1A1A2E",
    lineHeight: 38,
    marginBottom: 24,
  },
  step: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF0EE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  stepText: {
    flex: 1,
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 20,
  },
});
