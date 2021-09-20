import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    useWindowDimensions
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { button } from '../assests/styles';
import { ContextApp } from '../context/ContextApp';

const AddAnime = ({ navigation }) => {
    const context = useContext(ContextApp);
    const { pending, setPending } = context;
    const pendingData = pending.length >= 1 ? true : false
    const heigth = useWindowDimensions().height;
    const img = "https://w0.peakpx.com/wallpaper/633/444/HD-wallpaper-titan-de-ataque-eren-jaeger-shingeki-no-kyojin.jpg"

    const [imageUri, setImageUri] = useState();

    return (
        <View style={{ backgroundColor: 'black', minHeight: heigth }}>
            <View>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 25,
                        fontWeight: '700',
                        textAlign: 'center',
                        paddingTop: 10,
                        paddingBottom: 20
                    }}>
                    Añadir Anime
                </Text>
                {imageUri ? (
                    <Image
                        style={{ height: 400, marginTop: 30, marginHorizontal: 20 }}
                        source={{
                            uri: `${imageUri}`,
                        }}
                    />

                ) : (
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Catalogue')}
                    >
                        <Image
                            style={{ height: 400 }}
                            source={{
                                uri: img
                            }}
                        />
                    </TouchableOpacity>
                )}
            </View>
            <View>
                <TouchableOpacity
                    onPress={() =>
                        launchCamera(
                            { cameraType: 'back', mediaType: 'photo', saveToPhotos: true },
                            response => {
                                if (response.didCancel) {
                                    return;
                                }
                                if (!response.assets[0].uri) {
                                    return;
                                }
                                setImageUri(response.assets[0].uri);
                            },
                        )
                    }
                    style={[button.btn, button.btnTransparent]}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Usar cámara</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() =>

                        launchImageLibrary({ mediaType: 'photo' }, response => {
                            if (response.didCancel) {
                                return;
                            }
                            if (!response.assets[0].uri) {
                                return;
                            }
                            setPending(pending => [...pending, response.assets[0].uri])
                        })
                    }
                    activeOpacity={0.5}
                    style={[button.btn, button.btnTransparent]}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Agregar a pendientes</Text>
                </TouchableOpacity>
                {pendingData &&
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PendingList')}
                        style={[button.btn, button.btnTurquoise]}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>Pendientes</Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
};

export default AddAnime
