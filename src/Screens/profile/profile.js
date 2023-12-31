import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {colors} from "../../components/export";




const Box = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.block1A} onPress={props.onPress}>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 15,
            color: colors.secondary3,
          }}
        >
          {props.lable1}{" "}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.block1B} onPress={props.onPress}>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 15,
            color: colors.secondary3,
          }}
        >
          {props.lable2}{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const ProfileScreen = (props) => {
  const [tasksRequested, setNoTasks] = useState(0);
  const [fullName, setName] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [imgLink, setImgLink] = useState();

  const navigation = useNavigation();





  return (
    <View style={styles.screen}>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.containerTop}>
          <Text style={styles.top1}>
            <Feather name="chevron-left" size={15} color={colors.primary2} />{" "}
            Back{" "}
          </Text>
          <Text style={styles.top2}>Profile </Text>
          <Text style={styles.top3}>Edit </Text>
        </View>

        <View style={styles.profile}>
          {/* <Avatar
            size={140}
            rounded
            source={{
              uri: imgLink,
            }}
          >
            <Accessory />
          </Avatar> */}

          <Text
            style={{ fontSize: 18, fontWeight: "bold", color: colors.primary2 }}
          >
            {fullName}
          </Text>
          <Text></Text>
          <Text
            style={{ fontSize: 15, alignSelf: "center", paddingLeft: "3%" }}
          >
            Enter short bio here. lorem ispum dolor amet, constructoradipiscing
            elit. Accuan, urna,viverra, faucibus auctor in euismod id nullam.
          </Text>
        </View>

        <Box lable1="FirstName" lable2={fName} />
        <Box lable1="LastName" lable2={lName} />
        <Box lable1="Email" lable2={email} />
        <Box
          lable1="Change Password"
          lable2={
            <Feather name="chevron-right" size={22} color={colors.secondary3} />
          }
        />
        <Box lable1="Address" lable2={address} />
        <Box lable1="Phone" lable2={phone} />
        <Box lable1="Criminal record check" />
        <View style={styles.spacing}></View>
        <Box
          lable1="Settings"
          lable2={
            <Feather name="chevron-right" size={22} color={colors.secondary3} />
          }
          onPress={() => {
            navigation.navigate("submit");
          }}
        />
        <View style={styles.spacing}></View>
        <Box lable1="Times volunteered" lable2="None done now" />
        <Box lable1="Tasks Requested" lable2={tasksRequested} />
        <View style={styles.spacing}></View>
        <Box lable1="Help" />
        <Box
          lable1="Terms of Service "
          onPress={() => {
            navigation.navigate("terms");
          }}
        />
        <Box
          lable1="Privacy Policy"
          onPress={() => {
            navigation.navigate("privacy");
          }}
        />
        <Box
          lable1="Submit Feedback "
          onPress={() => {
            navigation.navigate("feedback");
          }}
        />
        {/* <Box lable1="Delete Account" onPress={deleteAccount} /> */}
        {/* <Box lable1="Log out from Account" onPress={signout} /> */}
        <View style={styles.spacing}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginTop: "7%",
  },
  container: {
    width: "100%",
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: colors.secondary3,
  },
  containerTop: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.primary4,
    paddingVertical: "8%",
    // paddingBottom: "3%"
  },

  spacing: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: colors.primary4,
  },
  profile: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: colors.secondary3,
    paddingBottom: "7%",
    paddingTop: "4%",
  },
  top1: {
    alignSelf: "center",
    fontSize: 15,
    color: colors.primary2,
  },
  top2: {
    alignSelf: "center",
    fontSize: 15,
    color: colors.primary2,
  },
  top3: {
    alignSelf: "center",
    fontSize: 15,
    color: colors.primary2,
    paddingRight: "1%",
  },
  block1: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  block2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  block1A: {
    alignItems: "center",
    paddingLeft: "2%",
  },
  block1B: {
    paddingRight: "2%",
  },
});

export default ProfileScreen;
