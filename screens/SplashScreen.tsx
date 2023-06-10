import {Image, StyleSheet, Text, View} from "react-native";

const SplashScreen = () => (
    <View style={styles.container}>
        <Image
            source={require('/Users/larsdebruijn/CelestialExplorer/assets/images/splashScreen.gif')}
            style={styles.image}
        />
        <Text style={styles.text}>CelestialExplorer</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -1, // Ensure the image is rendered behind the text
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        position: 'absolute',
        top: 20,
        left: 20,
        color: 'white',
        padding: 10,
    },
});

export default SplashScreen;
