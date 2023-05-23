import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

const image = "../assets/bgFoto.png";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const Register = () => {
  const [state, setState] = useState(initialState);
  
  const [showPassword, setShowPassword] = useState(true);
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  const handleSubmit = () => {
    console.log(state)
    setIsKeyboardShow(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  const keyBoardHide = () => {
    setIsKeyboardShow(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyBoardHide}>
      <ImageBackground source={require(image)} style={styles.imageBg}>
        <View style={styles.registerContainer}>
          <View
            style={[
              styles.avatar,
              {
                transform: [{ translateY: -50 }, { translateX: 50 }],
              },
            ]}
          >
            <TouchableOpacity
              style={[
                styles.addButton,
                {
                  transform: [{ translateY: 75 }, { translateX: 10 }],
                },
              ]}
            >
              <Image
                source={require("../assets/add.png")}
                style={{ width: 13, height: 13 }}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.registerTitle}>Реєстрація</Text>

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
                value={state.login}
                onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, login: value }))}
                placeholder="Логін"
                style={styles.input}
                onFocus={() => setIsKeyboardShow(true)}
              />
              <TextInput
                value={state.email}
                onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, email: value }))}
                placeholder="Адресa електронної пошти"
                style={styles.input}
                onFocus={() => setIsKeyboardShow(true)}
              />
              <View style={styles.showPasscontainer}>
                <TextInput
                  value={state.password}
                  onChangeText={(value) =>
                  setState((prevState) => ({
                  ...prevState, password: value, }))}
                  placeholder="Пароль"
                  secureTextEntry={showPassword}
                  style={[styles.inputPassword, styles.input]}
                  onFocus={() => setIsKeyboardShow(true)}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  accessibilityLabel="Показати пароль"
                  style={styles.showPass}
                >
                  <Text style={[styles.showPassLabel]}>Показати</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
          <TouchableOpacity
            onPress={handleSubmit}
            accessibilityLabel="Зареєструватися"
            style={styles.buttonRegister}
          >
            <Text style={styles.buttonRegisterLabel}>Зареєструватися</Text>
          </TouchableOpacity>
          <Text style={styles.linkLogin}>Вже маєте акаунт? Увійти</Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
    padding: 16,
    backgroundColor: "#fff",
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: 0,
    right: "50%",
    borderRadius: 16,
  },
  addButton: {
    width: 25,
    height: 25,
    backgroundColor: "#fff",
    borderColor: "1px solid orange",
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 50,
    borderColor: "#FF6C00",
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  registerTitle: {
    fontFamily: "Roboto",
    fontSize: 30,
    marginTop: 92,
    marginBottom: 32,
    fontWeight: "500",
    textAlign: "center",
  },
  formBox: {
    width: "100%",
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
  showPasscontainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
    backgroundColor: "#F6F6F6",
    marginBottom: 62,
    borderRadius: 8,
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

  buttonRegister: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    width: "100%",
    height: 48,
    borderRadius: 100,

    marginBottom: 16,
  },
  buttonRegisterLabel: {
    color: "white",
    textAlign: "center",
    fontFamily: "Roboto",
  },
  linkLogin: {
    color: "#1B4371",
    fontSize: 16,
    textDecorationLine: "underline",
    textAlign: "center",
    marginBottom: 78,
  },
});

export default Register;