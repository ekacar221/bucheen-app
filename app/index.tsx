import { ScrollView, View } from "react-native";
import HeroSection from "../src/components/HeroSection";
import HowItWorks from "../src/components/HowItWorks";
import Navbar from "../src/components/Navbar";
import PopularProfiles from "../src/components/PopularProfiles";
import Testimonials from "../src/components/Testimonials";
export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF5F5" }}>
      <ScrollView>
        <Navbar />
        <HeroSection />
        <HowItWorks />
        <PopularProfiles />
        <Testimonials />
      </ScrollView>
    </View>
  );
}
