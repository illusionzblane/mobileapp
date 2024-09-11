import { View, Text} from "react-native";

export default function Profile({ bioInfo, bioName}) {
    return (
        <View
            style={{
                paddingRight: "250px",
                paddingLeft: "250px",
                paddingBottom: "80px"
            }}
        >
            
            <Text
                style={{
                    fontSize: "25px",
                    paddingBottom: "10px",
                    fontWeight: "bold"
                }}
            >
                {bioName}
            </Text>
            <Text
                style={{
                    fontSize: "20px"
                }}
            >
                About:
            </Text>
            <Text
                style={{
                    fontSize: "15px"
                }}
            >
                {bioInfo}
            </Text>
        </View>
    )
}