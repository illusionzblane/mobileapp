import { View, Text } from "react-native";

export default function Bio({ about }) {
    return (
        <View>
            <Text
                style={{
                    fontSize: "15px"
                }}
            >
                {about}
            </Text>
        </View>
    )}
