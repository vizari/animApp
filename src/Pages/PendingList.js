import React, { useContext } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { grid, text, page, button } from '../assests/styles';
import { ContextApp } from '../context/ContextApp';
import { getStatus, notImagen } from './catalogue/helper';


const PendingList = () => {
    const context = useContext(ContextApp);
    const { pending, setPending } = context;
    console.log('pending', pending)
    return (

        <ScrollView style={page.body}>
            <View>
                <View style={{ marginBottom: 0, alignItems: 'center' }}>
                    {pending.map((item, index) => {
                        const imageUrl = item.bannerImage ? item.bannerImage : notImagen;
                        const title = item.title.english ? item.title.english : "";
                        return (
                            <TouchableOpacity
                                style={{
                                    marginBottom: 50,
                                    borderWidth: 1,
                                    borderColor: "white",
                                    padding: 10
                                }}
                                key={index}>
                                <Image
                                    source={{ uri: `${imageUrl}` }}
                                    style={{ height: 250, width: 360 }}
                                />
                                <View
                                    style={{
                                        color: 'black',
                                        backgroundColor: 'white',
                                        marginTop: 10,
                                        padding: 10
                                    }}>

                                    <Text
                                        style={{
                                            fontWeight: '700',
                                            fontSize: 20,
                                        }}>
                                        {title}
                                    </Text>
                                    <Text style={text.subTitle}>
                                        {item.title.native}
                                    </Text>
                                    <View style={grid.gridFlex}>
                                        <Text style={text.subTitle}>
                                            Nº Episodios: {item.episodes}
                                        </Text>
                                        <Text style={text.subTitle}>
                                            Estado: {getStatus(item.status)}
                                        </Text>
                                    </View>

                                </View>
                                <View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setPending(pending => {
                                              const newArray = pending.filter(
                                                value => value !== item.id
                                              )
                                              return newArray;
                                            })
                                          }}
                                        activeOpacity={0.5}
                                        style={[button.btn, button.btnTransparent] }>
                                        <Text style={{ textAlign: 'center', color: 'white' }}>Eliminar</Text>
                                    </TouchableOpacity>
                                </View>

                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View >
        </ScrollView >
    )
}

export default PendingList
