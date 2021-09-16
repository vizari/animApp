import React, { useContext, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { page, button } from '../assests/styles'
import { ContextApp } from '../context/ContextApp'

const Home = ({ navigation }) => {

    const url = "https://cdnb.artstation.com/p/assets/images/images/003/482/337/large/-eva-kill-bill.jpg?1474195518";
    const context = useContext(ContextApp);
    const { pending, setPending } = context;

    const pendingData = pending.length >= 1 ? true : false

    return (
        <ScrollView style={page.body}>
            <View>
                    <Image
                        style={{ height: 500 }}
                        source={{
                            uri: url
                        }}
                    />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Catalogue')}
                    style={[button.btn, button.btnTransparent]}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Catálogo</Text>
                </TouchableOpacity>
                { pendingData &&
                    <TouchableOpacity
                    onPress={() => navigation.navigate('PendingList')}
                    style={[button.btn, button.btnTurquoise]}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Pendientes</Text>
                </TouchableOpacity>
                }

            </View>
        </ScrollView>
    )
}

export default Home
