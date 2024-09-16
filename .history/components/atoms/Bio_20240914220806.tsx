import { View, Text } from "react-native";

export default function Bio({ bioInfo }) {
    return (
        <Text
        style={{
            fontSize: "15px"
        }}
    >
        {bioInfo}
    </Text>
    )}
