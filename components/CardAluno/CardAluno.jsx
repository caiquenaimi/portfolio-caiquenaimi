import {
    Text,
    View,
    Image,
} from "react-native";

function CardAluno() {
    return (
        <View>
            <Text className="text-center text-xl text-white font-bold">
                Caique Naimi
            </Text>
            <Image
                className="rounded-full h-60 w-64 mx-auto"
                source={require("../../assets/imagens/caiquenaimi.png")}
            />
            <Text className="text-center text-l text-white mt-4">
                Aluno do curso de Desenvolvimento de Sistemas, atualmente no 3º
                semestre.
            </Text>
        </View>
    )
}

export default CardAluno