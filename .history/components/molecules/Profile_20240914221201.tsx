import { View, Text } from "react-native";
import Image from "@/components/atoms/ProfileImage";
import Bio from "@/components/atoms/Bio";

export default function Profile({ bioName }) {
    return (
        <View
            style={{
                paddingRight: "250px",
                paddingLeft: "250px",
                paddingBottom: "80px"
            }}
        >
            <Image bioImage="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"/>
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
            
            <Bio />
           
        </View>
    )
}