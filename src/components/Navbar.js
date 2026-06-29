import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

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
          <Text style={styles.linkActive}>Home</Text>
          <Text style={styles.link}>Service</Text>
          <Text style={styles.link}>About</Text>
          <Text style={styles.link}>Pricing</Text>
          <Text style={styles.link}>Support</Text>
        </View>
      )}

      {/* BUTONLAR */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.signIn}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUp}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
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
  linkActive: { color: "#FB923C", fontWeight: "500", marginRight: 32 },
  link: { color: "#6B7280", marginRight: 32 },
  buttons: { flexDirection: "row" },
  signIn: {
    borderWidth: 1,
    borderColor: "#FB923C",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    marginRight: 12,
  },
  signInText: { color: "#FB923C", fontWeight: "500" },
  signUp: {
    backgroundColor: "#FB923C",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
  },
  signUpText: { color: "#FFFFFF", fontWeight: "500" },
});
