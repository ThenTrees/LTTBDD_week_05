import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import BackIcon from "../assets/images/Image_183.png";
import BackgroundHeaderIcon from "../assets/images/Image20.png";
import emailIcon from "../assets/images/email.png";
import lockIcon from "../assets/images/lock.png";
import { useState } from "react";
export default Screen_03 = ({navigation}) => {
    return (
        <View style={styles.container_full}>
            <Image style={{width: '100%'}} source={BackgroundHeaderIcon}/>
            <TouchableOpacity onPress={()=>{ navigation.navigate('home') }}>
                <Image style={styles.backIcon} source={BackIcon}/>
            </TouchableOpacity>
            <View style={styles.container}>
                <Text style={{fontWeight: 700, fontSize: 28, marginBottom: 70}}>Welcome!</Text>
                <View>
                    <Text style={{fontSize:18, fontWeight: 700}}>Email</Text>
                    <View style={styles.input}>
                        <Image style={styles.iconBody} source={emailIcon}/>
                        <TextInput  keyboardType="email-address" style={styles.inputBody} placeholder="Enter email" placeholderTextColor="#ccc"/>
                    </View>
                    

                    <Text style={{fontSize:18, fontWeight: 700, marginTop: 20}}>Password</Text>
                    <View style={styles.input}>
                        <Image style={styles.iconBody} source={lockIcon}/>
                        <TextInput keyboardType="visible-password" secureTextEntry={true}  style={styles.inputBody} placeholder="Enter password" placeholderTextColor="#ccc"/>
                        {/* <Image style={[styles.iconBody,{left: 330}]} source={eyeIcon}/> */}
                    </View>
                </View>
                <TouchableOpacity style={styles.btnContinue} onPress={()=>{navigation.navigate('product-detail')}}>
                        <Text style={{fontSize: 16, color: '#fff', fontWeight: 500}}>Login</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container_full:{
        flex: 1,
        backgroundColor: '#fff',
    },
    backIcon:{
        width: 20,
        height: 20,
        position: 'absolute',
        top: -180,
        left: 15
    },
    container:{
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: '#fff',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        marginTop: -10
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    inputBody:{
        height: 40,
        borderWidth: 1,
        borderBlockColor: '#000',
        borderRadius: 10,
        marginVertical: 10,
        paddingLeft: 40,
        flex: 1
    },
    iconBody:{
        width: 20,
        height: 20,
        position: 'absolute',
        left: 10,
        top: 20
    },
    btnContinue:{
        backgroundColor: '#00CCFF',
        padding: 10,
        borderRadius: 50,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70
    }
})