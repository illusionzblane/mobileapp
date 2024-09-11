import { Text, View } from "react-native";
import Name from "@/components/atoms/Name";
import InputForm from "@/components/molecules/InputForm";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputForm
              textForName="Michael Bennett"
              textForPlaceholder="Good Job."/>
    </View>
  );
}
