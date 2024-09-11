import {Image, View} from "react-native";

export default function profileImage({bioImage}) {
    return(
        <View>
            <Image 
            source={{ uri: bioImage }}
                alt="user image" 
                height={100} 
                width={105}
                style={{
                    borderRadius: "60%",
                    paddingBottom: "10px",
                }}
            />
        </View>
    )
}
