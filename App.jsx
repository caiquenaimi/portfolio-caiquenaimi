import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import CardProjeto from "./components/CardProjetos/CardProjeto.jsx";
import CardAluno from "./components/CardAluno/CardAluno.jsx";

export default function App() {
  const [typedText, setTypedText] = useState("");
  const textToType =
    "Um entusiasta da programação em constante busca por aprendizado. Sempre empenhado em criar soluções inovadoras.";

  useEffect(() => {
    const typingEffect = setTimeout(() => {
      if (typedText.length < textToType.length) {
        setTypedText(textToType.substring(0, typedText.length + 1));
      }
    }, 100
    );

    return () => clearTimeout(typingEffect);
  }, [typedText]);

  return (
    <View className="flex-1 bg-black items-center justify-center">
      <View className="p-10 bg-black">
        <CardAluno />
        <Text
          className="text-center text-l mt-4 font-semibold"
          style={{ color: "#ff3a5e" }}
        >
          {typedText}
        </Text>
        <ScrollView>
          <Text className="text-center text-xl text-white mt-4 font-bold">
            Projetos:
          </Text>
         <CardProjeto />
        </ScrollView>
      </View>
    </View>
  );
}
