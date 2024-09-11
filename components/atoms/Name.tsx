import {Text, View} from "react-native"

export default function Name({ nameText }){
    return(
        <View>
            <Text
                style={{
                    color:"black",
                    fontWeight:"bold",
                }}
            >
            {nameText}
            </Text>
        </View>
    )
}