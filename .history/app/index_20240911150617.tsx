import { Text, View } from "react-native";
import Name from "@/components/atoms/Name";
import InputForm from "@/components/molecules/InputForm";
import Profile from "@/components/molecules/Profile";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Profile
        bioName="Michael Bennett"
        bioInfo="James Miller is a New York-based digital marketing strategist with a knack for helping brands tell their stories through data-driven insights. When he's not crafting compelling campaigns, you can find him exploring new cities, diving into a good book, or enjoying a strong cup of coffee. Passionate about fitness and food, James believes in balancing work and life with a dash of adventure."
      />
      <InputForm
              textForName="Michael Bennett"
              textForPlaceholder="Good Job."/>
    </View>
  );
}
