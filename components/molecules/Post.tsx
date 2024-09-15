import {View, TextInput} from "react-native"
import Name from "@/components/atoms/Name"
import Image from "@/components/atoms/Image";
import Message from "@/components/atoms/Message";
import Bio from "@/components/atoms/Bio"

export default function InputForm({ textForName, textForMessage}){
    return (

<View
style={{
    flexDirection:"row",
    gap:10,
    alignItems:"center",
    border:"solid 2px",
    padding:"5px",
    borderRadius: "20px",
    
}}
>
            <Image/>
            <Name nameText={textForName}/>
            {/* <TextInput defaultValue={textForPlaceholder}
            /> */}
            <Message messageText={textForMessage}/>
        </View>
    )
}
