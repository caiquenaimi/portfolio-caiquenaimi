import {
    Text,
    View,
    Image,
} from "react-native";

import Carousel from "react-native-snap-carousel";
import { Link } from "expo-router";


function CardProjeto() {

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
            img: require("../../assets/imagens/marvel.png"),
            technologies: [
                require("../../assets/imagens/react.png"),
                require("../../assets/imagens/node.png"),
                require("../../assets/imagens/next.webp"),
            ],
            color: "red",
            link: "https://marvel-6devs.vercel.app",
        },
        {
            id: "project2",
            title: "Kaminews",
            description: "Blog de noticias desenvolvido em grupo durante o curso.",
            img: require("../../assets/imagens/kami.png"),
            technologies: [
                require("../../assets/imagens/html.png"),
                require("../../assets/imagens/css.png"),
                require("../../assets/imagens/js.png"),
            ],
            color: "blue",
            link: "https://kaminews.netlify.app",
        },
        {
            id: "project3",
            title: "API Brasileirão",
            description:
                "Site feito utilizando API do Brasileirão para CRUD de times.",
            img: require("../../assets/imagens/brasileirao.png"),
            technologies: [
                require("../../assets/imagens/react.png"),
                require("../../assets/imagens/node.png"),
                require("../../assets/imagens/next.webp"),
            ],
            color: "green",
            link: "https://brasileirao-6devs.vercel.app",
        },
    ];


    return (
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
    )
}

export default CardProjeto