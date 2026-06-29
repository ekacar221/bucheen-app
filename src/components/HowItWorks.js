import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

export default function HowItWorks() {
  const { width } = useWindowDimensions();
  const isWeb = width >= 768;

  const steps = [
    {
      icon: "🔍",
      text: "Find your dating relationship in app and waiting until you get a notification. have a good relationship its started",
    },
    {
      icon: "❤️",
      text: "Dating with benefits and you redefine the expectations of a perfect relationship with your partner",
    },
    {
      icon: "👤",
      text: "Ideal relationship makes your online relationship run more smoothly using app",
    },
  ];

  return (
    <View style={[styles.container, isWeb && styles.containerWeb]}>
      {/* SOL TARAF - Başlık */}
      <View style={[styles.left, isWeb && styles.leftWeb]}>
        <Text style={styles.title}>
          How It Works To Find{"\n"}Your Relationship
        </Text>

        {/* ADIMLAR */}
        {steps.map((step, index) => (
          <View key={index} style={styles.step}>
            {/* İKON */}
            <View style={styles.iconBox}>
              <Text style={styles.icon}>{step.icon}</Text>
            </View>
            {/* METİN */}
            <Text style={styles.stepText}>{step.text}</Text>
          </View>
        ))}
      </View>

      {/* SAĞ TARAF - Dekoratif Daireler */}
      {isWeb && (
        <View style={styles.right}>
          <View style={styles.circleLarge} />
          <View style={styles.circleSmall} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 24,
    paddingTop: 40,
  },
  containerWeb: {
    flexDirection: "row-reverse",
    alignItems: "center",
    paddingHorizontal: 80,
    paddingVertical: 80,
  },
  left: { flex: 1 },
  leftWeb: { flex: 1, paddingLeft: 40 },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1A1A2E",
    lineHeight: 44,
    marginBottom: 36,
  },
  step: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 28,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFF0EE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  icon: { fontSize: 18 },
  stepText: {
    flex: 1,
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 22,
  },
  right: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 300,
  },
  circleLarge: {
    width: 280,
    height: 280,
    borderRadius: 140,
    borderWidth: 2,
    borderColor: "#F9A8A8",
    position: "absolute",
  },
  circleSmall: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#F9A8A8",
    position: "absolute",
  },
});
