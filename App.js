import { ScrollView } from "react-native";
import Navbar from "./src/components/Navbar";

export default function App() {
  return (
    // Tüm sayfa dikey kaydırılabilir
    <ScrollView className="flex-1 bg-rose-50">
      <Navbar />
      {/* Diğer komponentler buraya gelecek */}
    </ScrollView>
  );
}
