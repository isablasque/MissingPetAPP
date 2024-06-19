import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../Context/AuthContext';

export default function Detalhes({ handle, item, animal, animalFoto }) {
    const [observacao, setObservacao] = useState(false);
    const [observacaoId, setObservacaoId] = useState(0);
    const [observacaoDescricao, setObservacaoDescricao] = useState('');
    const [observacaoLocal, setObservacaoLocal] = useState('');
    const [observacaoData, setObservacaoData] = useState('');
    const [animalId, setAnimalId] = useState(0);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);  // Novo estado para sucesso
    const { usuarioId } = useContext(AuthContext);

    async function SalvarObservacao() {
        setError(false);
        setSuccess(false);

        await fetch('http://10.139.75.6:5251/api/Observacao/InsertObservacao', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                observacaoDescricao: observacaoDescricao,
                observacaoLocal: observacaoLocal,
                observacaoData: "2024-06-19T10:52:06.370Z",
                animalId: animalId,
                usuarioId: usuarioId
            })
        })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setSuccess(true);  // Define sucesso como true
                // Limpar campos após salvar
                setObservacaoDescricao('');
                setObservacaoLocal('');
                setObservacaoData('');
            })
            .catch(err => {
                console.log(err);
                setError(true);  // Define erro como true
            });
    }

    return (
        <ScrollView>
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
                            <Text style={css.descriptionText}>Data de encontro: <Text style={css.TextData}>{item.animalDtEncontro}</Text></Text>
                        </View>
                        <View style={css.descriptionBox}>
                            <Text style={css.descriptionText}>{item.animalStatus}</Text>
                        </View>
                        <View style={css.categoryBox}>
                            <TouchableOpacity onPress={() => { setObservacao(true), setAnimalId(item.animalId) }} style={css.btnCriar} >
                                <Text style={css.textCriar}>Criar observação</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {observacao &&
                        <View style={css.containerObservacao}>
                            <TextInput
                                inputMode="text"
                                style={css.input}
                                value={observacaoDescricao}
                                onChangeText={(digitado) => setObservacaoDescricao(digitado)}
                                placeholderTextColor="#A9A9A9"
                                placeholder="Descrição do animal"
                            />
                            <TextInput
                                inputMode="text"
                                style={css.input}
                                value={observacaoLocal}
                                onChangeText={(digitado) => setObservacaoLocal(digitado)}
                                placeholderTextColor="#A9A9A9"
                                placeholder="Local"
                            />
                            <TextInput
                                inputMode='text'
                                style={css.input}
                                value={observacaoData}
                                onChangeText={(digitado) => setObservacaoData(digitado)}
                                placeholderTextColor="#A9A9A9"
                                placeholder="Data"
                            />
                            <TouchableOpacity onPress={SalvarObservacao} style={css.btnSalvar} >
                                <Text style={css.textSalvar}>Salvar</Text>
                            </TouchableOpacity>
                            {error &&
                                <View style={css.error}>
                                    <Text style={css.errorText}>Revise os campos e tente novamente</Text>
                                </View>
                            }
                            {success &&  // Renderiza a mensagem de sucesso
                                <View style={css.success}>
                                    <Text style={css.successText}>Observação salva com sucesso!</Text>
                                </View>
                            }
                        </View>
                    }
                </View>
            </View>
        </ScrollView>
    )
}

const css = StyleSheet.create({
    all: {
        margin: 12,
    },
    tudo: {
        alignItems: "center",
    },
    container: {
        width: "100%",
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
    containerObservacao: {
        width: "100%",
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
        marginVertical: 15,
        overflow: 'hidden',
        padding: 20,
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
    input: {
        width: "100%",
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
        backgroundColor: "white",
        color: "#262626",
        borderWidth: 2,
        borderColor: "#DCDBDB",
    },
    btnSalvar: {
        width: "100%",
        height: 50,
        borderWidth: 2,
        borderColor: "#DCDBDB",
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: "black"
    },
    textSalvar: {
        color: "white",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    },
    voltar: {
        fontSize: 60,
    },
    btnCriar: {
        width: "80%",
        height: 50,
        borderWidth: 2,
        borderColor: "#DCDBDB",
        borderRadius: 10,
        backgroundColor: "black"
    },
    textCriar: {
        color: "white",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    },
    error: {
        width: "100%",
        height: 50,
        marginTop: 30
    },
    errorText: {
        color: "black",
        textAlign: "center"
    },
    success: {  // Novo estilo para mensagem de sucesso
        width: "100%",
        height: 50,
        marginTop: 15,
        backgroundColor: "#d4edda",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    successText: {
        color: "#155724",
        textAlign: "center",
        fontWeight: "bold",
    }
})
