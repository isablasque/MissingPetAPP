import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const { Login, error , setCadastro, cadastro} = useContext(AuthContext);

    function RealizaLogin() {
       Login( email, senha );
    }

    
    return (
        <ScrollView contentContainerStyle={css.container}>
            <Image source={require("../../assets/img/logo-inteira.png")} style={css.logo} />
            <TextInput
                inputMode="email"
                placeholder="Email"
                style={css.input}
                value={email}
                onChangeText={(digitado) => setEmail(digitado)}
                placeholderTextColor="#B4B4B4"
            />
            <TextInput
                inputMode="text"
                placeholder="Password"
                secureTextEntry={true}
                style={css.input}
                value={senha}
                onChangeText={(digitado) => setSenha(digitado)}
                placeholderTextColor="#B4B4B4"/>
            <TouchableOpacity style={css.forgot} onPress={() => setCadastro(!cadastro)}>
                <Text style={css.forgotText}>Não tem conta? Cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.btnLogin} onPress={RealizaLogin}>
                <Text style={css.btnLoginText}>Log In</Text>
            </TouchableOpacity>
            {error &&
                <View style={css.error}>
                    <Text style={css.errorText}>Revise os campos e tente novamente</Text>
                </View>
            }
        </ScrollView>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#F9F5F4"
    },
    logo: {
        width: "60%",
        height: "25%",
        resizeMode: "contain"
    },
    input: {
        width: "90%",
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
        backgroundColor: "white",
        color: "#262626",
        borderWidth: 2,
        borderColor: "#DCDBDB",
    },
    forgot: {
        width: "90%",
        marginTop: 10,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    forgotText: {
        color: "black",
        fontWeight: "bold"
    },
    btnLogin: {
        width: "90%",
        height: 50,
        borderWidth: 2,
        borderColor: "#DCDBDB",
        borderRadius: 10,
        marginTop: 30,
        backgroundColor: "black"
    },
    btnLoginText: {
        color: "white",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 15,
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
    }
});