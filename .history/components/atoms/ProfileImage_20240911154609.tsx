import {Image, View} from "react-native";

export default function profileImage({ bioImage }) {
    return(
        <View>
            <Image 
            source={{ uri: bioImage }}
                style={{
                    borderRadius: "60%",
                    paddingBottom: "10px",
                    height: "100px",
                    width: "105px"
                }}
            />
        </View>
    )
}
