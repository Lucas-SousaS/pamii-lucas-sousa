import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID
};

  firebase.initializeApp(firebaseConfig);



  
interface Nome {
  id: string;
  Nome: string;
  Sobrenome: string;
}

export default function Index() {
  const [nomes, setNomes] = useState<Nome[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();
      const data: Nome[] = [];

      snapshot.forEach((doc) => {
        const docData = doc.data();
        if (docData.Nome && docData.Sobrenome) {
          data.push({ id: doc.id, Nome: docData.Nome, Sobrenome: docData.Sobrenome });
        }
      });

      setNomes(data);
    };

    fetchData();
  }, []);

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
