import React, { useContext, useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { grid, text, page  } from '../assests/styles';
import { ContextApp } from '../context/ContextApp';
import { getStatus, notImagen } from './catalogue/helper';

const PendingList = () => {
    const context = useContext(ContextApp);
    const { pending, setPending } = context;

    return (

        <ScrollView style={page.body}>
            <View>
                <View style={{ marginBottom: 0, alignItems: 'center' }}>
                    {pending.map((item, index) => {
                        const typeImg = item.bannerImage || item;
                        const imageUrl = typeImg ? typeImg : notImagen;

                        return (
                            <TouchableOpacity
                                style={{
                                    marginBottom: 50,
                                    borderWidth: 1,
                                    borderColor: "white",
                                    padding: 10
                                }}
                                key={index}>
                                {imageUrl &&
                                    <Image
                                        source={{ uri: `${imageUrl}` }}
                                        style={{ height: 250, width: 360 }}
                                    />
                                }

                                <View
                                    style={{
                                        color: 'black',
                                        backgroundColor: 'white',
                                        marginTop: 10,
                                        padding: 10
                                    }}>

                                    {item.title &&
                                        <Text
                                            style={{
                                                fontWeight: '700',
                                                fontSize: 20,
                                            }}>
                                            {item.title.english ? item.title.english : ''}
                                        </Text>
                                    }
                                    {item.title &&
                                        <Text style={text.subTitle}>
                                            {item.title.native}
                                        </Text>
                                    }
                                    <View style={grid.gridFlex}>
                                        <Text style={text.subTitle}>
                                            Nº Episodios: {item.episodes ? item.episodes : ''}
                                        </Text>
                                        <Text style={text.subTitle}>
                                            Estado: {getStatus(item.status) ? getStatus(item.status) : ''}
                                        </Text>
                                    </View>

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
