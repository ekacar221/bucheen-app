import { useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from "react-native";

export default function FindMatchSection() {
  const { width } = useWindowDimensions();
  const isWeb = width >= 768;
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <View style={[styles.container, isWeb && styles.containerWeb]}>
      {isWeb && (
        <View style={styles.left}>
          <Image
            source={require("../../assets/images/Group 9061.png")}
            style={styles.circleImage}
            resizeMode="contain"
          />
        </View>
      )}

      <View style={[styles.right, isWeb && styles.rightWeb]}>
        <Text style={styles.title}>
          Find Match Now and{"\n"}Develop Your Feelings
        </Text>

        <Text style={styles.description}>
          There are so many platforms from this Pokan to make a task manager
          manage all your time, the data needed is very useful. and we have it
          all to get you to be successful
        </Text>

        <TouchableOpacity
          style={[styles.button, btnHovered && styles.buttonHovered]}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
        >
          <Text style={styles.buttonText}>Read More</Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 80,
    paddingVertical: 60,
  },
  left: {
    flex: 1,
    height: 220,
    justifyContent: "center",
  },
  circleImage: {
    width: 320,
    height: 290,
  },
  right: { flex: 1 },
  rightWeb: { paddingLeft: 40 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1A1A2E",
    lineHeight: 38,
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 22,
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#FF6B6B",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
    transition: "all 0.3s ease",
  },
  buttonHovered: {
    backgroundColor: "#E85555",
    transform: [{ scale: 1.05 }],
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },
});
