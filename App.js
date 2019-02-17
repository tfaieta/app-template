import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";
import { NotificationIcon } from "./components/Icons";
import Logo from "./components/Logo";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <SafeAreaView>
          <ScrollView style={{ height: "100%" }}>
            <TitleBar>
              <Avatar source={require("./assets/avatar.jpg")} />
              <Name>Tony Faieta</Name>
              <Title>Maker of things, student at UF 🐊</Title>
              <NotificationIcon
                style={{ position: "absolute", right: 20, top: 5 }}
              />
            </TitleBar>
            <ScrollView
              style={{
                flexDirection: "row",
                padding: 20,
                paddingLeft: 12,
                paddingTop: 30
              }}
              horizontal={true}
            >
              <Logo
                image={require("./assets/logo-framerx.png")}
                text="Framer X"
              />
              <Logo image={require("./assets/logo-figma.png")} text="Figma" />
            </ScrollView>
            <SubTitle>See Blog Posts</SubTitle>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              <Card
                title="Blog Post"
                image={require("./assets/background2.jpg")}
                caption="Caption Text"
                logo={require("./assets/logo-react.png")}
                subtitle="Subtitle Text"
              />
              <Card
                title="Blog Post"
                image={require("./assets/background2.jpg")}
                caption="Caption Text"
                logo={require("./assets/logo-react.png")}
                subtitle="Subtitle Text"
              />
              <Card
                title="Blog Post"
                image={require("./assets/background2.jpg")}
                caption="Caption Text"
                logo={require("./assets/logo-react.png")}
                subtitle="Subtitle Text"
              />
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

const SubTitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 15px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;
