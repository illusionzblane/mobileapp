import { View, Text } from "react-native";

export default function Bio({ bioInfo }) {
    return (
        <View>
            <Text
                style={{
                    fontSize: "15px"
                }}
            >
                {bioInfo}
            </Text>
        </View>
    )}
