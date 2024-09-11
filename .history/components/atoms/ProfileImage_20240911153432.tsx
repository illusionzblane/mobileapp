import {Image, View} from "react-native"

export default function profileImage({}) {
    return(
        <View>
            <Image src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" 
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
