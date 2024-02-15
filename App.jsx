import React from "react";
import { Text, View, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

export default function App() {
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
      technologies: ["React", "Node", "Express"],
      color: "red",
    },
    {
      id: "project2",
      title: "Kaminews",
      description: "Blog de noticias desenvolvido em grupo durante o curso.",
      img: require("./assets/imagens/kami.png"),
      technologies: ["html", "css", "javascript"],
      color: "blue",
    },
    {
      id: "project3",
      title: "API Brasileirão",
      description:
        "Site feito utilizando API do Brasileirão para CRUD de times.",
      img: require("./assets/imagens/brasileirao.png"),
      technologies: ["React", "Node", "Express"],
      color: "green",
    },
  ];

  return (
    <View className="flex-1 bg-black items-center justify-center">
      <View className="p-4 bg-black">
        <View>
          <Text className="text-center text-xl text-white">Caique Naimi</Text>
          <Image
            className="rounded-full h-64 w-64 mx-auto"
            source={require("./assets/imagens/caiquenaimi.png")}
          />
          <Text className="text-center text-xl text-white">
            Aluno de Desenvolvimento de Sistemas cursando o 3º Semestre
          </Text>
          <Text className="text-center text-xl text-white mt-4">
            Sobre mim:
          </Text>
          
          <Text className="text-center text-xl text-white mt-4">Projetos:</Text>
          <View className="flex-1 items-center justify-center">
            <Carousel
              data={projects}
              renderItem={({ item }) => (
                <View className="mb-4">
                  <Text
                    style={{ color: colors[item.color] }}
                    className={`text-center text-xl text-white mt-4`}	
                  >
                    {item.title}
                  </Text>
                  <Image
                    style={{ width: "100%", height: 237, borderRadius: 10 }}
                    source={item.img}
                  />
                  <Text className="text-center text-base text-white mt-1">
                    {item.description}
                  </Text>
                  <Text className="text-center text-base text-white mt-1">
                    Tecnologias: {item.technologies.join(", ")}
                  </Text>
                </View>
              )}
              sliderWidth={200}
              itemWidth={200}
              windowSize={3}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
