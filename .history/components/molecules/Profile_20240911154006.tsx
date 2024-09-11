import { View, Text} from "react-native";
import Image from "@/components/atoms/ProfileImage"

export default function Profile({ bioInfo, bioName}) {
    return (
        <View
            style={{
                paddingRight: "250px",
                paddingLeft: "250px",
                paddingBottom: "80px"
            }}
        >
            <Image />
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