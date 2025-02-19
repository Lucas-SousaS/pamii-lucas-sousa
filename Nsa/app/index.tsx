import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Index = () => {
  const [rm, setRm] = useState("");
  const [senha, setSenha] = useState("");
  const [codigoEtec, setCodigoEtec] = useState("");



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nsa</Text>

      <TextInput
        style={styles.input}
        placeholder="RM do Aluno"
        keyboardType="numeric"
        value={rm}
        onChangeText={setRm}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha do Aluno"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TextInput
        style={styles.input}
        placeholder="Código da ETEC"
        value={codigoEtec}
        onChangeText={setCodigoEtec}
      />

      <Link href={"/Home"} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    padding: 14,
    backgroundColor: "#4A90E2",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Index;
