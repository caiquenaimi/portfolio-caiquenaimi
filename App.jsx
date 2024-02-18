import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { Link } from "expo-router";

export default function App() {
  const [typedText, setTypedText] = useState("");
  const textToType =
    "Um entusiasta da programação em constante busca por aprendizado. Sempre empenhado em criar soluções inovadoras.";

  useEffect(() => {
    const typingEffect = setTimeout(() => {
      if (typedText.length < textToType.length) {
        setTypedText(textToType.substring(0, typedText.length + 1));
      }
    }, 1);

    return () => clearTimeout(typingEffect);
  }, [typedText]);

  const colors = {
    red: "#e23636",
    blue: "#509bfa",
    green: "#C7FF00",
  };

  const projects = [
    {
      id: "project1",
      title: "API da Marvel",
      description:
        "Site feito utilizando API da Marvel Studios para CRUD de personagens.",
      img: require("./assets/imagens/marvel.png"),
      technologies: [
        require("./assets/imagens/react.png"),
        require("./assets/imagens/node.png"),
        require("./assets/imagens/next.webp"),
      ],
      color: "red",
      link: "https://marvel-6devs.vercel.app",
    },
    {
      id: "project2",
      title: "Kaminews",
      description: "Blog de noticias desenvolvido em grupo durante o curso.",
      img: require("./assets/imagens/kami.png"),
      technologies: [
        require("./assets/imagens/html.png"),
        require("./assets/imagens/css.png"),
        require("./assets/imagens/js.png"),
      ],
      color: "blue",
      link: "https://kaminews.netlify.app",
    },
    {
      id: "project3",
      title: "API Brasileirão",
      description:
        "Site feito utilizando API do Brasileirão para CRUD de times.",
      img: require("./assets/imagens/brasileirao.png"),
      technologies: [
        require("./assets/imagens/react.png"),
        require("./assets/imagens/node.png"),
        require("./assets/imagens/next.webp"),
      ],
      color: "green",
      link: "https://brasileirao-6devs.vercel.app",
    },
  ];

  return (
    <View className="flex-1 bg-black items-center justify-center">
      <View className="p-10 bg-black">
        <Text
          className="text-center text-4xl font-bold"
          style={{ color: "#ff3a5e" }}
        >
          Portfólio
        </Text>
        <Text className="text-center text-xl text-white font-bold">
          Caique Naimi
        </Text>
        <Image
          className="rounded-full h-60 w-64 mx-auto"
          source={require("./assets/imagens/caiquenaimi.png")}
        />
        <Text className="text-center text-l text-white mt-4">
          Aluno do curso de Desenvolvimento de Sistemas, atualmente no 3º
          semestre.
        </Text>
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
          <View className="flex-1 items-center justify-center">
            <Carousel
              data={projects}
              renderItem={({ item }) => (
                <View className="mb-4">
                  <Text
                    style={{ color: colors[item.color] }}
                    className={`text-center text-xl text-white mt-4 font-semibold`}
                  >
                    {item.title}
                  </Text>

                  <Image
                    style={{ width: "100%", height: 237, borderRadius: 10 }}
                    source={item.img}
                  />
                  <Text className="text-center text-white mt-1">
                    {item.description}
                  </Text>
                  {
                    <Link href={item.link} className="text-center">
                      <Text
                        className="text-center text-white mt-1 underline"
                        style={{ color: colors[item.color] }}
                      >
                        Ver Projeto
                      </Text>
                    </Link>
                  }
                  <Text className="text-center text-base text-white mt-1 ">
                    Tecnologias:
                  </Text>
                  <View className="flex-row justify-center">
                    {item.technologies.map((tech, index) => (
                      <Image
                        key={index}
                        style={{ width: 40, height: 40, marginHorizontal: 5 }}
                        source={tech}
                      />
                    ))}
                  </View>
                </View>
              )}
              sliderWidth={200}
              itemWidth={200}
              windowSize={3}
              loop={true}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
