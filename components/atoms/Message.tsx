import {Text, View} from "react-native"

export default function Message({ messageText }){
    return(
        <View>
            <Text
                style={{
                    color:"black",
                    fontWeight:"regular",
                }}
            >
            {messageText}
            </Text>
        </View>
    )
}