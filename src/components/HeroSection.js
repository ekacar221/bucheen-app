import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

export default function HeroSection() {
  const { width } = useWindowDimensions();
  const isWeb = width >= 768;
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <View style={[styles.container, isWeb && styles.containerWeb]}>
      <View style={[styles.left, isWeb && styles.leftWeb]}>
        <Text style={styles.title}>
          Find <Text style={styles.titleHighlight}>Match Now</Text>
          {"\n"}and Grow Your{"\n"}Feelings
        </Text>

        <Text style={styles.description}>
          There are so many platforms from this Pokan to make a task manager
          manage all your time, the data needed is very useful and we have it
          all to get you to be successful
        </Text>

        {/* ARAMA KUTUSU */}
        <View style={styles.searchBox}>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Male ▾</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Female ▾</Text>
          </TouchableOpacity>

          {/* FIND NOW BUTONU */}
          <TouchableOpacity
            style={[styles.findButton, btnHovered && styles.findButtonHovered]}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
          >
            <Text style={styles.findButtonText}>Find Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {isWeb && (
        <View style={styles.right}>
          <Image
            source={require("../../assets/images/Mask_Group.png")}
            style={styles.mockupImage}
            resizeMode="contain"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF5F5",
    padding: 24,
    paddingTop: 40,
  },
  containerWeb: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 80,
    paddingVertical: 80,
  },
  left: { flex: 1 },
  leftWeb: { flex: 1, paddingRight: 40 },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#1A1A2E",
    lineHeight: 60,
    marginBottom: 20,
  },
  titleHighlight: { color: "#FF6B6B" },
  description: {
    fontSize: 15,
    color: "#6B7280",
    lineHeight: 26,
    marginBottom: 36,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#F3F4F6",
  },
  dropdown: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  dropdownText: {
    color: "#1A1A2E",
    fontWeight: "500",
    fontSize: 15,
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: "#E5E7EB",
  },
  findButton: {
    backgroundColor: "#FF6B6B",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 50,
    marginLeft: 8,
    transition: "all 0.3s ease",
  },
  findButtonHovered: {
    backgroundColor: "#E85555",
    transform: [{ scale: 1.05 }],
  },
  findButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 15,
  },
  right: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mockupImage: {
    width: "100%",
    maxWidth: 820,
    aspectRatio: 556 / 599,
  },
});
