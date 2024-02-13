import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Colors from "../../Utils/Colors";

const Login = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("./../../../assets/images/2790729.jpg")}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text>SE</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginImage: {
    width: 350,
    height: 450,
    marginTop: 70,
    borderWidth: 3,
    borderColor: Colors.BLACK,
  },
  subContainer: {
    width: "100%",
    backgroundColor: Colors.PRIMARY,
  },
});

export default Login;
