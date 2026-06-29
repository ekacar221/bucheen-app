import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

// Her link için ayrı hover state tutan component
function NavLink({ label, active }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Text
      style={[
        styles.link,
        active && styles.linkActive,
        hovered && styles.linkHovered,
      ]}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </Text>
  );
}

// Her buton için ayrı hover state tutan component
function NavButton({ label, outline }) {
  const [hovered, setHovered] = useState(false);
  return (
    <TouchableOpacity
      style={[
        outline ? styles.signIn : styles.signUp,
        hovered && (outline ? styles.signInHovered : styles.signUpHovered),
      ]}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Text style={outline ? styles.signInText : styles.signUpText}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default function Navbar() {
  const { width } = useWindowDimensions();
  const isWeb = width >= 768;

  return (
    <View style={styles.container}>
      {/* LOGO */}
      <View style={styles.logo}>
        <Text style={styles.logoPurple}>Bu</Text>
        <Text style={styles.logoOrange}>cheen</Text>
      </View>

      {/* LINKLER - sadece geniş ekranda */}
      {isWeb && (
        <View style={styles.links}>
          <NavLink label="Home" active />
          <NavLink label="Service" />
          <NavLink label="About" />
          <NavLink label="Pricing" />
          <NavLink label="Support" />
        </View>
      )}

      {/* BUTONLAR */}
      <View style={styles.buttons}>
        <NavButton label="Sign In" outline />
        <NavButton label="Sign Up" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  logo: { flexDirection: "row" },
  logoPurple: { fontSize: 22, fontWeight: "bold", color: "#7C3AED" },
  logoOrange: { fontSize: 22, fontWeight: "bold", color: "#FB923C" },
  links: { flexDirection: "row" },
  link: { color: "#6B7280", marginRight: 32, transition: "all 0.2s ease" },
  linkActive: { color: "#FB923C", fontWeight: "500" },
  // Hover - turuncu renk al
  linkHovered: { color: "#FB923C" },
  buttons: { flexDirection: "row" },
  signIn: {
    borderWidth: 1,
    borderColor: "#FB923C",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    marginRight: 12,
    transition: "all 0.2s ease",
  },
  // Hover - arka plan turuncu olsun
  signInHovered: {
    backgroundColor: "#FFF0E6",
  },
  signInText: { color: "#FB923C", fontWeight: "500" },
  signUp: {
    backgroundColor: "#FB923C",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    transition: "all 0.2s ease",
  },
  // Hover - koyulaşsın
  signUpHovered: {
    backgroundColor: "#EA7C1E",
    transform: [{ scale: 1.05 }],
  },
  signUpText: { color: "#FFFFFF", fontWeight: "500" },
});
