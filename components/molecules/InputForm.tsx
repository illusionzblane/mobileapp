import {View, TextInput} from "react-native"
import Button from "@/components/atoms/Buttons"
import Label from "@/components/atoms/Label"

export default function InputForm({ textForLabel, textForButton, textForPlaceholder }){
    return (
        <View
            style={{
                flexDirection:"row",
                gap:10,
                alignItems:"center",
            }}
        >
            <Label labelText={textForLabel}/>
            <TextInput 
            defaultValue={textForPlaceholder}
            style={{
                border:"1px solid" 
            }}
            />
            <Button buttonText={textForButton}/>
        </View>
    )
}