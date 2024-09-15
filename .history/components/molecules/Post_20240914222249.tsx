import {View, TextInput} from "react-native"
import Name from "@/components/atoms/Name"
import Image from "@/components/atoms/Image";
import Bio from "@/components/atoms/Bio"

export default function InputForm({ textForName, textForPlaceholder }){
    return (

<View
style={{
    flexDirection:"row",
    gap:10,
    alignItems:"center",
    border:"solid 2px",
    padding:"2px",
    borderRadius: "20px",
    
}}
>
            <Image/>
            <Name nameText={textForName}/>
            {/* <TextInput defaultValue={textForPlaceholder}
            /> */}
            <Bio bioInfo={textForPlaceholder}/>
        </View>
    )
}
