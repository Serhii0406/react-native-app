import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const image = "../assets/bgFoto.png";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isShowPass, setIsShowPass] = useState(true);
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  const passwordHandler = (text) => setPassword(text);
  const emailHandler = (text) => setEmail(text);
  const showPassToggle = () => setIsShowPass(!isShowPass);

  const onLogin = () => {
    Alert.alert(`User Password: ${password}, Email: ${email}`);
  };
  const keyBoardHide = () => {
    setIsKeyboardShow(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyBoardHide}>
      <ImageBackground source={require(image)} style={styles.imageBg}>
        <View style={styles.registerContainer}>
          <Text style={styles.registerTitle}>Увійти</Text>
          <View
            style={{
              ...styles.formBox,
              marginBottom: isKeyboardShow ? 0 : 43,
            }}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                value={email}
                onChangeText={emailHandler}
                placeholder="Адресa електронної пошти"
                style={styles.input}
                onFocus={() => setIsKeyboardShow(true)}
              />
              <View style={styles.showPasscontainer}>
                <TextInput
                  value={password}
                  onChangeText={passwordHandler}
                  placeholder="Пароль"
                  secureTextEntry={isShowPass}
                  style={[styles.inputPassword, styles.input]}
                  onFocus={() => setIsKeyboardShow(true)}
                />
                <TouchableOpacity
                  title={"Показати"}
                  onPress={showPassToggle}
                  accessibilityLabel="Показати пароль"
                  style={styles.showPass}
                >
                  <Text style={[styles.showPassLabel]}>Показати</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                title={"Увійти"}
                onPress={onLogin}
                accessibilityLabel="Увійти"
                style={styles.buttonLogin}
              >
                <Text style={styles.buttonLoginLabel}>Увійти</Text>
              </TouchableOpacity>
              <Text style={styles.linkRegister}>
                Немає акаунту? Зареєструватися
              </Text>
            </KeyboardAvoidingView>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
    padding: 16,
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  registerTitle: {
    fontFamily: "Roboto",
    fontSize: 30,
    marginTop: 32,
    marginBottom: 32,
    fontWeight: "500",
    textAlign: "center",
  },
  formBox: {
    width: "100%",
    marginBottom: 43,
  },
  input: {
    width: "100%",
    fontFamily: "Roboto",
    height: 48,
    padding: 16,
    backgroundColor: "#F6F6F6",
    marginBottom: 16,
    borderRadius: 8,
    borderStyle: "solid",
  },
  buttonLogin: {
    width: "100%",
    marginTop: 43,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
  },
  buttonLoginLabel: {
    color: "white",
    textAlign: "center",
    fontFamily: "Roboto",
  },
  linkRegister: {
    color: "#1B4371",
    fontSize: 16,
    textDecorationLine: "underline",
    fontFamily: "Roboto",
    textAlign: "center",
    marginBottom: 144,
  },
  showPasscontainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
    backgroundColor: "#F6F6F6",
    marginBottom: 62,
    borderRadius: 8,
    borderStyle: "solid",
    position: "relative",
  },
  showPassLabel: {
    position: "absolute",
    fontFamily: "Roboto",

    top: 12,
    right: 16,
    height: 25,
    fontSize: 16,
    color: "#1B4371",
  },
});

export default Login;