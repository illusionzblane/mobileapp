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
            
            <Bio bioInfo={James Miller is a New York-based digital marketing strategist with a knack for helping brands tell their stories through data-driven insights. When he's not crafting compelling campaigns, you can find him exploring new cities, diving into a good book, or enjoying a strong cup of coffee. Passionate about fitness and food, James believes in balancing work and life with a dash of adventure.}/>
           
        </View>
    )
}