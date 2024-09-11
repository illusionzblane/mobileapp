import {Image as NativeImage, View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  size: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    borderRadius:'40px',
  },
});

export default function Image({}){
    return (
        <View>
            <NativeImage 
            style={styles.size}
            source={require('@/assets/images/MichaelProfile.jpeg')}
            />
        </View>
    )
}