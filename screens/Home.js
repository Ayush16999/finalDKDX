import {View,Text,StyleSheet,Button} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hurray!!, we are on the home screen</Text>
            <Button onPress={ () => navigation.navigate("SignIn")} title="Go to Sign In" />
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color: "#aaa"
    },
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default HomeScreen;