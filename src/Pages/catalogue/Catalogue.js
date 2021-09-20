import React, { useContext } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { page, text, grid, button, spinner } from '../../assests/styles'
import { getStatus, notImagen } from './helper';
import { ContextApp } from '../../context/ContextApp'
import Modal from '../../shared/Modal';


const ANIMEDATA = gql`
{
    Page {
      media {
        siteUrl
        title {
          english
          native
        }
        description
        bannerImage
        id
        episodes
        source
        status
      }
    }
  }`;


const Catalogue = ({ navigation }) => {
    const context = useContext(ContextApp);
    const { pending, setPending } = context;
    const { loading, error, data } = useQuery(ANIMEDATA);
    const showPendingButton = pending.length >= 1  && !loading ? true : false;

    if (error) {
        console.warn(error);
        return (
            <View>
                <Text>Error</Text>
            </View>
        )
    }
    return (
        <ScrollView style={page.body}>
            <View style={{ position: 'relative' }}>
               { loading && <Text
                    style={{
                        color: 'white',
                        fontSize: 25,
                        fontWeight: '700',
                        textAlign: 'center',
                        paddingTop: 10,
                        paddingBottom: 20
                    }}>
                    Catálogo
                </Text>}
                {showPendingButton &&
                    <View style={{ marginBottom: 20 }}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('PendingList') }}
                            activeOpacity={0.5}
                            style={[button.btn, button.btnTurquoise]}>
                            <Text style={{ textAlign: 'center', color: 'white' }}>Ver pendientes</Text>
                        </TouchableOpacity>
                    </View>
                }
                {data && loading === false ? (
                    <View style={{ marginBottom: 0, alignItems: 'center' }}>
                        {data.Page.media.map((item, index) => {
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
                                            style={[button.btn, button.btnTransparent]}>
                                            <Modal
                                                text="Ver descripción"
                                                body={item.description}>
                                                Ver
                                            </Modal>

                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => {
                                                () => navigation.navigate('PendingList')
                                                setPending(pending => [...pending, item])
                                            }
                                            }
                                            activeOpacity={0.5}
                                            style={[button.btn, button.btnTransparent]}>
                                            <Text style={{ textAlign: 'center', color: 'white' }}>Agregar a pendientes</Text>
                                        </TouchableOpacity>

                                    </View>


                                </TouchableOpacity>
                            );
                        })}
                    </View>
                ) : (
                    <View style={[spinner.container, spinner.horizontal]}>
                        <ActivityIndicator size="large" color="#00ff00" />
                    </View>
                )}

            </View>
        </ScrollView>
    )
}

export default Catalogue
