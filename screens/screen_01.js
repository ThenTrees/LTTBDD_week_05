import {View, StyleSheet, Image, Text} from 'react-native';
import BackgroundImage from "../assets/images/Container17.png"
import { TouchableOpacity } from 'react-native';
export default Screen_01 = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={BackgroundImage}/>
            </View>
            <View style={styles.body}>
                <Text style={styles.titleText}>Boost Productivity</Text>
                <Text style={styles.textDesc}>Simplify tasks, boost productivity</Text>
                <TouchableOpacity style={styles.btnSignUp} onPress={()=> {
                    navigation.navigate('signUp')
                }}>
                    <Text style={ styles.textBtnSign}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLogin} onPress={()=> {
                    navigation.navigate('login')
                }} >
                    <Text style={ styles.textBtnLogin}>Login</Text>
                </TouchableOpacity>
                <View style={styles.listAround}>
                    <Text style={[styles.around,styles.child]}></Text>
                    <Text style={styles.around}></Text>
                    <Text style={[styles.around, styles.child]}></Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18,
        paddingVertical: 5,
        backgroundColor: '#fff',
    },
    header:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    body:{
        gap: 15
    },
    titleText:{
        textTransform: 'uppercase',
        color: '#000',
        fontSize: 24,
        fontWeight: "700",
        marginTop: 20
        },
    textDesc: { 
        fontSize: 16,
        color: "#999",
        
    },
    btnSignUp:{
        backgroundColor: '#00CCFF',
        paddingVertical: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems:'center'
    },
    btnLogin:{
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems:'center'
    },
    textBtnSign: {
        fontSize: 18,
        fontWeight: 700,
        color: '#fff'
    },
    textBtnLogin:{
        fontSize: 18,
        fontWeight: 700,
        color: '#000'
    },
    around:{
        backgroundColor: "#00CCFF",
        width: 10,
        height:10,
        borderRadius: 50,
        marginHorizontal: 5
    },
    listAround:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    child: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#00CCFF'
    }
})
