import { useNavigation } from "@react-navigation/native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Linking } from "react-native";
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import pinte from "../../../assets/pinte.PNG";
import {
  Container,
  Title,
  InputEmail,
  LoginButton,
  LoginFacebook,
  LoginText,
  LoginGoogle,
  LoginTextGoogle,
  LoginTextFacebook,
  TermosServiço,
  PinterestLogo,
} from "./styles";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
  });
  const navigation = useNavigation();

  return (
    <Container>
      <PinterestLogo source={pinte} />
      <Title>Bem-vindo(a) ao Pinterest </Title>
      <InputEmail
        value={user.email}
        onChangeText={setUser}
        placeholder={"Endereço de e-mail"}
        placeholderTextColor={"gray"}
      />

      <LoginButton>
        <LoginText>Continuar</LoginText>
      </LoginButton>

      <LoginFacebook
        onPress={() => {
          Linking.openURL("https://www.facebook.com/");
        }}
      >
        <View style={{ flexDirection: "row", marginRight: "27px" }}>
          <FontAwesome5 name="facebook" size={19} color="white" />

          <LoginTextFacebook> Continuar com o Facebook</LoginTextFacebook>
        </View>
      </LoginFacebook>

      <LoginGoogle
        onPress={() => {
          Linking.openURL("http://gmail.com/");
        }}
      >
        <View style={{ flexDirection: "row", marginRight: "27px" }}>
          <FontAwesome name="google" size={19} color="black" />
          <LoginTextGoogle>Continuar com o Google</LoginTextGoogle>
        </View>
      </LoginGoogle>

      <TermosServiço>
        Ao continuar, voce concorda com os Termos de Serviço do Pinterest e
        confirma que leu a nossa Política de Privacidade.{" "}
      </TermosServiço>

      <StatusBar style="auto" />
    </Container>
  );
};
