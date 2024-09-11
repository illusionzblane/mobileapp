import { View, Text} from "react-native";

export default function Profile({ bioInfo, bioName}) {
    return (
        <View
            style={{
                paddingRight: "250px",
                paddingLeft: "250px",
                paddingBottom: "20px"
            }}
        >
            
            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" 
                alt="user image" 
                height={100} 
                width={105}
                style={{
                    borderRadius: "60%",
                    paddingBottom: "10px",
                }}
            />
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