import { ScrollView, View } from "react-native";
import HeroSection from "../src/components/HeroSection";
import Navbar from "../src/components/Navbar";
export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF5F5" }}>
      <ScrollView>
        <Navbar />
        <HeroSection />
      </ScrollView>
    </View>
  );
}
