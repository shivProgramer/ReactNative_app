import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Colors from "../../Utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
WebBrowser.maybeCompleteAuthSession();
const Login = () => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("./../../../assets/images/loginimg.jpg")}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text
          style={{ fontSize: 25, color: Colors.WHITE, textAlign: "center" }}
        >
          {" "}
          Let's Find{" "}
          <Text style={{ fontWeight: "bold" }}>
            professinal Cleaning and repair{" "}
          </Text>{" "}
          Service{" "}
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: Colors.WHITE,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Best App to find Services Near You which deliver you a Professional
          Services
        </Text>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text
            style={{ fontSize: 17, textAlign: "center", color: Colors.PRIMARY }}
          >
            Let's Get Started{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginImage: {
    width: 350,
    height: 450,
    marginTop: 70,
  },
  subContainer: {
    width: "100%",
    backgroundColor: Colors.PRIMARY,
    height: "40%",
    marginTop: -30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  btn: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 30,
    marginTop: 40,
  },
});

export default Login;
