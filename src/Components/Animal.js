import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Animal({ nome, raca, tipo, cor, sexo, dtdesaparecimento, dtencontro, status, foto, observacao, exibirdetalhes }) {
    return (
      <View>
        <View style={css.container}>
            <View style={css.boxTitle}>
                <Text style={css.title}>{nome}</Text>
            </View>
            <View style={css.boxImage}>
                <Image source={{ uri: foto }} style={css.imagem}/>
            </View>
            <View style={css.descriptionBox}>
                <Text style={css.descriptionText}>Desaparecido em: <Text style={css.TextData}>{dtdesaparecimento}</Text></Text>
            </View>
            <View style={css.categoryBox}>
            <Text style={css.categoryText}>{raca}</Text>
            <Text style={css.categoryText}>{cor}</Text>
            <Text style={css.categoryText}>{sexo}</Text>
            </View>
            <View style={css.categoryBox}>
            <TouchableOpacity style={css.btnLogin} onPress={exibirdetalhes}>
                <Text style={css.btnLoginText}>Detalhes</Text>
            </TouchableOpacity>
            </View> 
        </View>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
        margin: 15,
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
        borderTopColor: '#e1e1e1',
        borderTopWidth: 1,
      },
      descriptionText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'justify',
      },
      TextData: {
        fontSize: 16,
        color: '#333',
        textAlign: 'justify',
      },
      categoryBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: '#e1e1e1',
        backgroundColor: "white",
      },
      categoryText: {
        fontSize: 14,
        color: '#666',
      },
      btnLogin: {
        width: "90%",
        height: 50,
        borderWidth: 2,
        borderColor: "#DCDBDB",
        borderRadius: 10,
        backgroundColor: "black"
    },
    btnLoginText: {
        color: "white",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    },
});