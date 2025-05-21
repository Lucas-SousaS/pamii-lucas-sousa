import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

// Configuração do Firebase
const firebaseConfig = {

};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Usar a instância já inicializada, caso exista
}

// Tipagem dos dados
interface Nome {
  id: string;
  Nome: string;
  Sobrenome: string;
}

export default function Index() {
  const [nomes, setNomes] = useState<Nome[]>([]);

  useEffect(() => {
    // Função para buscar os dados do Firestore
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();
      const data: Nome[] = [];

      snapshot.forEach((doc) => {
        const docData = doc.data();
        if (docData.Nome && docData.Sobrenome) {
          // Preencher o array com os dados do documento
          data.push({ id: doc.id, Nome: docData.Nome, Sobrenome: docData.Sobrenome });
        }
      });

      setNomes(data);
    };

    fetchData(); // Chamada da função para buscar dados
  }, []);

  // Função para renderizar cada item na FlatList
  const renderItem = ({ item }: { item: Nome }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.Nome} {item.Sobrenome}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Nomes</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
