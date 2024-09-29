import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import BackIcon from "../assets/images/Image_183.png";
import DonutImage from "../assets/images/Container73.png";
import image1 from "../assets/images/Container72.png";
import image2 from "../assets/images/Container71.png";
import image3 from "../assets/images/Container74.png";
import image4 from "../assets/images/Container7.png";
import starIcon from "../assets/images/Rating3.png";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";


export default Screen_04 = ({navigation}) => {
    const [chooseSize, setChooseSize] = useState('M');
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    const [quantity, setQuantity] = useState(2);
    const [totalMoney, setTotalMoney] = useState(0);
    const price = 2.99;
    return (
        <View style={styles.container}>
            {/* back icon */}
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{ navigation.navigate('home') }}>
                    <AntDesign name="left" size={24} color="#708090" />
                </TouchableOpacity>
                <Text style={{fontSize: 16, fontWeight: 600, marginLeft: 15}}>Product name</Text>
            </View>
                {/* body */}
            <View>
                <Image style={{width: '100%', borderRadius: 10, marginTop: 5}} source={DonutImage}/>
                <View style={styles.listImage}>
                    <Image source={image1}/>    
                    <Image  source={image2}/>    
                    <Image  source={image3}/>    
                    <Image  source={image4}/>    
                </View>
                <View style={styles.tag}>
                    <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#23C8D4'}}>${price}</Text>
                    <View style={{ backgroundColor: '#FFE4E1', width: 100,height: 20, borderRadius: 20, justifyContent: 'center', alignItems: 'center', opacity: '0.5'}}>
                        <Text style={{color: '#FF1493', paddingBottom:4, opacity: 1}}>Buy 1 get 1</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
                    <View>
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 6}}>Product name</Text>
                        <Text style={{color: '#ddd'}}>Occaecat est deserumt tempor offici</Text>
                    </View>
                    <View style={{flexDirection: 'row', width: 40, columnGap: 5}}>
                        <Image source={starIcon}/>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>4.5</Text>
                    </View>
                </View>
                    <Text style={{fontSize: 16,fontWeight: 500, color: '#708090', marginTop: 20}}>Size</Text>
                <View style={styles.listSize}>
                {sizes.map((size) => (
                    <TouchableOpacity
                        key={size}
                        style={[
                            styles.size,
                            chooseSize === size && styles.selectedButton, // Highlight the selected size
                        ]}
                        onPress={() => setChooseSize(size)} // Update selected size
                        >
                        <Text style={styles.textSize}>{size}</Text>
                    </TouchableOpacity>
                ))}
                </View>
                <Text style={{fontSize: 16,fontWeight: 500, color: '#708090', marginTop: 20, marginBottom: 10}}>Quantity</Text>
                <View style={{flexDirection: 'row', columnGap: 10, justifyContent: 'space-between', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', columnGap: 10, justifyContent: 'flex-start'}}>
                        <TouchableOpacity onPress={()=>{setQuantity(quantity-1)}}>
                            <AntDesign name="minuscircleo" size={24} color="black" />
                        </TouchableOpacity>
                            <Text style={{fontSize: 16, fontWeight: 500, color: '#708090'}}>{quantity}</Text>
                        <TouchableOpacity onPress={()=>setQuantity(quantity+1)}>
                            <AntDesign name="pluscircleo" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', columnGap: 10, justifyContent: 'flex-end'}}>
                        <Text style={{fontSize: 14, color: '#708090'}}>Total</Text>
                        <Text style={{fontSize: 16, color: '#000', fontWeight: 700}}>${price* quantity}</Text>
                    </View>
                </View>
                <View style={styles.line}></View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize:16, fontWeight: 700}}>Size guide</Text>
                    <AntDesign name="right" size={18} color="#ccc" />
                </View>
                <View style={styles.line}></View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize:16, fontWeight: 700}}>Reviews (99)</Text>
                    <AntDesign name="right" size={18} color="#ccc" />
                </View>
                <View style={styles.line}></View>
                <TouchableOpacity onPress={()=>{alert('add to cart is successfully')}}>
                    <View style={styles.btnAdd2Cart}>
                        <AntDesign name="shoppingcart" size={24} color="#fff" />
                        <Text style={{color: '#fff', fontWeight: 600}}>Add to Cart</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    listImage:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    tag: {
        flexDirection: 'row',
        justifyContent:'flex-start',
        columnGap: 10,
        alignItems: 'center',
    },
    listSize:{
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
        width: 150,
        marginBottom: 20,
        
    },
    size:{
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 8,
        paddingVertical: 6,
        width: 40,
        height:30,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textSize: {
        color: '#ccc',
    },
    selectedButton: {
        backgroundColor: '#23C8D4', // Change color for selected size
    },
    line:{
        width: '100%',
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 10,
    },
    btnAdd2Cart:{
        flex: 1,
        backgroundColor: '#23C8D4',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7,
        borderRadius: 5,
        columnGap: 5
    }
})