import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import Checkbox from 'expo-checkbox';
import BackIcon from "../assets/images/Image_183.png";
import LogoIcon from "../assets/images/Image19.png";
import userIcon from "../assets/images/user.png";
import emailIcon from "../assets/images/email.png";
import lockIcon from "../assets/images/lock.png";
import eyeIcon from "../assets/images/eye.png";
import { useState } from "react";
export default Screen_02 = ({navigation}) => {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            {/* back icon */}
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{ navigation.navigate('home') }}>
                    <Image style={styles.backIcon} source={BackIcon}/>
                </TouchableOpacity>
                <View style={styles.logoIcon}>
                    <Image source={LogoIcon}/>
                    <Text style={styles.title}>Nice to see you!</Text>
                    <Text style={styles.desc}>Create your account</Text>
                </View>
            </View>
                {/* body */}
                <View>
                    <View style={styles.input}>
                        <Image style={styles.iconBody} source={userIcon}/>
                        <TextInput style={styles.inputBody} placeholder="Enter your user name" placeholderTextColor="#ccc"/>
                    </View>
                    <View style={styles.input}>
                        <Image style={styles.iconBody} source={emailIcon}/>
                        <TextInput  keyboardType="email-address" style={styles.inputBody} placeholder="Enter your email address" placeholderTextColor="#ccc"/>
                    </View>
                    <View style={styles.input}>
                        <Image style={styles.iconBody} source={lockIcon}/>
                        <TextInput keyboardType="visible-password" secureTextEntry={true}  style={styles.inputBody} placeholder="Enter your password" placeholderTextColor="#ccc"/>
                        {/* <Image style={[styles.iconBody,{left: 330}]} source={eyeIcon}/> */}
                    </View>
                    <View style={styles.term}>
                        <Checkbox  color={isChecked ? '#4630EB' : undefined} style={styles.checkbox} value={isChecked} onValueChange={setChecked}  />
                        <Text style={{marginLeft: 5}}>I agree with</Text>
                        <Text style={{color: 'blue', marginLeft: 5, fontWeight: 500}}>Terms & Conditions</Text>
                    </View>
                    <TouchableOpacity style={styles.btnContinue} onPress={()=>{navigation.navigate('home')}}>
                        <Text style={{fontSize: 16, color: '#fff', fontWeight: 500}}>Continue</Text>
                    </TouchableOpacity>
                </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        marginBottom: 50
    },
    backIcon:{
        width: 20,
        height: 20
    },
    logoIcon:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        marginBottom: 10
    },
    title:{
        fontSize: 24,
        fontWeight: 700,
        marginTop: 20
    },
    desc:{
        fontSize: 16,
        color: "#999",
        marginTop: 10
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
    term:{
        flexDirection: 'row',
        alignItems:'center'
    },
    checkbox: {
        margin: 8,
    },
    btnContinue:{
        backgroundColor: '#00CCFF',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})