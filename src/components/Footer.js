import { Mail, MapPin, Phone } from "lucide-react-native";
import { useState } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

function FooterLink({ label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Text
      style={[
        styles.columnLink,
        styles.standardLinkGap,
        hovered && styles.linkHovered,
      ]}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </Text>
  );
}

function ContactItem({ Icon, children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <View
      style={[styles.contactRow, hovered && styles.linkHovered]}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon
        size={16}
        color={hovered ? "#FF6B6B" : "#6B7280"}
        style={styles.contactIcon}
      />
      <Text style={[styles.columnLink, hovered && styles.textTextColorHovered]}>
        {children}
      </Text>
    </View>
  );
}

export default function Footer() {
  const { width } = useWindowDimensions();
  const isWeb = width >= 768;

  return (
    <View style={styles.container}>
      <View style={[styles.top, isWeb && styles.topWeb]}>
        <View style={[styles.brand, isWeb && styles.brandWeb]}>
          <View style={styles.logo}>
            <Text style={styles.logoPurple}>Bu</Text>
            <Text style={styles.logoOrange}>cheen</Text>
          </View>
          <Text style={styles.brandDesc}>
            The most accurate and simplest time tracking for all of you. and we
            have been serving for more than 4 years and have made you happy
          </Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.columnTitle}>About Us</Text>
          <FooterLink label="Our people" />
          <FooterLink label="Our categories" />
          <FooterLink label="Contact us" />
          <FooterLink label="Testimonial" />
        </View>

        <View style={styles.column}>
          <Text style={styles.columnTitle}>Product</Text>
          <FooterLink label="Task Management" />
          <FooterLink label="Service" />
          <FooterLink label="Task Schedule" />
        </View>

        <View style={styles.column}>
          <Text style={styles.columnTitle}>Contact us</Text>
          <ContactItem Icon={Phone}>(021) 3258 4930</ContactItem>
          <ContactItem Icon={Mail}>Pokan@Hola.com</ContactItem>
          <ContactItem Icon={MapPin}>
            {"Sukabumi, Jawa Barat\nIndonesia, IDN"}
          </ContactItem>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF5F5",
    paddingHorizontal: 80,
    paddingTop: 60,
    paddingBottom: 24,
  },
  top: { flexDirection: "column" },
  topWeb: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  brand: { marginBottom: 32 },
  brandWeb: { width: "30%" },
  logo: { flexDirection: "row", marginBottom: 16 },
  logoPurple: { fontSize: 22, fontWeight: "bold", color: "#7C3AED" },
  logoOrange: { fontSize: 22, fontWeight: "bold", color: "#FF6B6B" },
  brandDesc: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 22,
  },
  column: { marginBottom: 32 },
  columnTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FF6B6B",
    marginBottom: 16,
  },
  columnLink: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 20,
    transition: "all 0.2s ease", // Animasyon geçişi
  },
  standardLinkGap: {
    marginBottom: 10,
  },
  linkHovered: {
    color: "#FF6B6B",
    transform: [{ translateX: 4 }],
  },
  textTextColorHovered: {
    color: "#FF6B6B",
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
    transition: "all 0.2s ease",
  },
  contactIcon: {
    marginRight: 8,
    marginTop: 2,
    transition: "all 0.2s ease",
  },
  bottom: {
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
    paddingTop: 24,
    alignItems: "center",
  },
  copyright: {
    fontSize: 13,
    color: "#6B7280",
  },
});
