import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Detalhes({ handle, item }) {
    return (
        <View style={css.all}>
        <TouchableOpacity onPress={() => handle(false)} >
        <MaterialCommunityIcons name="arrow-left" size={20} color={"#666"} marginTop={30} />
        </TouchableOpacity>
        <View style={css.tudo}>
            <View style={css.container}>
                <View style={css.boxTitle}>
                    <Text style={css.title}>{item.animalNome}</Text>
                </View>
                <View style={css.boxImage}>
                    <Image style={css.imagem} source={{ uri: item.animalFoto }}></Image>
                </View>
                <View style={css.categoryBox}>
                    <Text style={css.categoryText}>{item.animalRaca}</Text>
                    <Text style={css.categoryText}>{item.animalTipo}</Text>
                    <Text style={css.categoryText}>{item.animalCor}</Text>
                    <Text style={css.categoryText}>{item.animalSexo}</Text>
                </View>
                <View style={css.descriptionBox}>
                    <Text style={css.descriptionText}>{item.animalObservacao}</Text>
                </View>
                <View style={css.descriptionBox}>
                    <Text style={css.descriptionText}>Data de desaparecimento: <Text style={css.TextData}>{item.animalDtDesaparecimento}</Text></Text>
                    <Text style={css.descriptionTextEncontro}>Data de encontro: <Text style={css.TextData}>{item.animalDtEncontro}</Text></Text>
                </View>
                <View style={css.descriptionBox}>
                    <Text style={css.descriptionText}>{item.animalStatus}</Text>
                </View>
            </View>
            <View style={css.container}>

            </View>
        </View>
        </View>
    )
}

const css = StyleSheet.create({
    tudo: {
        alignItems: "center",
        width: "100%",
    },
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
        marginVertical: 15,
        overflow: 'hidden',

    },
    boxTitle: {
        padding: 15,
        backgroundColor: 'white',
        alignItems: 'left',
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: '#333',
    },
    boxImage: {
        alignItems: 'center',
        backgroundColor: 'white',
    },
    imagem: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    descriptionBox: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    descriptionText: {
        fontSize: 15,
        color: '#666',
        textAlign: 'justify',
    },
    descriptionTextEncontro: {
        fontSize: 15,
        color: 'black',
        textAlign: 'justify',
        fontWeight: "bold",
    },
    categoryBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
        backgroundColor: "white",
    },
    categoryText: {
        fontSize: 14,
        color: '#666',
    },
    TextData: {
        fontSize: 16,
        color: '#333',
        textAlign: 'justify',
    },
})