import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animal from '../Components/Animal';
import Detalhes from '../Components/Detalhes';

export default function Home() {
  const [animal, setAnimal] = useState([]);
  const [erro, setError] = useState(false);
  const [detalhes, setDetalhes] = useState(false);
  const [item, setItem] = useState();
  
  async function getAnimal() {
    try {
      const response = await fetch('http://10.139.75.6:5251/api/Animal/GetAllAnimal', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const json = await response.json();
        setAnimal(json);
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    }
  }

  useEffect(() => {
    getAnimal();
  }, []);

  function exibirdetalhes(item) {
    setItem(item);
    setDetalhes(true);
  }

  function renderAnimais({ item }) {
    return (
        <View>
          <Animal
            nome={item.animalNome}
            id={item.animalId}
            raca={item.animalRaca}
            tipo={item.animalTipo}
            cor={item.animalCor}
            sexo={item.animalSexo}
            observacao={item.animalObservacao}
            foto={item.animalFoto}
            dtdesaparecimento={item.animalDtDesaparecimento}
            dtencontro={item.animalDtEncontro}
            status={item.animalStatus}
            exibirdetalhes={ () => exibirdetalhes( item ) }
          />
        </View>
    )
  }
  const animalFiltrado = animal.filter(animal => animal.animalStatus === 1)
  return (
    <View Style={css.container}>
      {animal.length > 0 && !detalhes &&
        <>
          <FlatList style={css.flatlist}
            data={animalFiltrado}
            renderItem={renderAnimais}
            keyExtractor={(item) => item.animalId}
            contentContainerStyle={css.listContainer}
          />
        </>
      }
      {!animal && !detalhes &&
        <Text style={css.text}>Nenhum animal encontrado.</Text>
      }
      {detalhes && <Detalhes handle={setDetalhes} item={item} />}
    </View>
  )
}

const css = StyleSheet.create({
  container: {
    backgroundColor: "#F9F5F4",
    flexGrow: 1,
    color: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
  teste: {
    backgroundColor: "red",
  },
  logo: {
    width: "100%",
    height: "10%",
    resizeMode: "contain"
  },
})
