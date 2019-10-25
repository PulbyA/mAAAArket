import {StyleSheet, Dimensions} from "react-native";

const { width, height } = Dimensions.get('window');

export default headerStyles = StyleSheet.create({
    title : {
        fontSize:20
    },
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        height: (height - 160)
    },
    buttons: {
        marginBottom: 10 ,
        margin:75,
        padding:5
    },
    tab: {
        padding: 20,
        height: 100,
    },
    img_button: {
        width: 35,
        height: 35
    },
    img_logo: {
        width: 100,
        height: 35,
    }
});