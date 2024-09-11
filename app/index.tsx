import { Text, View } from "react-native";
import Button from "@/components/atoms/Buttons";
import Label from "@/components/atoms/Label";
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
              textForLabel="i'm a Label!"
              textForButton="i'm a button!"
              textForPlaceholder="i'm a placeholder!"/>
    </View>
  );
}
