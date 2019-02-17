import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";
import { NotificationIcon } from "./components/Icons";
import Logo from "./components/Logo";
import Project from "./components/Project";

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
              {logos.map((logo, index) => (
                <Logo key={index} image={logo.image} text={logo.text} />
              ))}
            </ScrollView>
            <SubTitle>See Blog Posts</SubTitle>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              {cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  image={card.image}
                  subtitle={card.subtitle}
                  caption={card.caption}
                  logo={card.logo}
                />
              ))}
            </ScrollView>
            <ScrollView>
              <SubTitle>See Projects</SubTitle>
              {projects.map((project, index) => (
                <Project
                  key={index}
                  image={project.image}
                  title={project.title}
                  subtitle={project.subtitle}
                  logo={project.logo}
                  author={project.author}
                  avatar={project.avatar}
                  caption={project.caption}
                />
              ))}
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

const logos = [
  {
    image: require("./assets/logo-framerx.png"),
    text: "Framer X"
  },
  {
    image: require("./assets/logo-figma.png"),
    text: "Figma"
  },
  {
    image: require("./assets/logo-studio.png"),
    text: "Studio"
  },
  {
    image: require("./assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("./assets/logo-swift.png"),
    text: "Swift"
  },
  {
    image: require("./assets/logo-sketch.png"),
    text: "Sketch"
  }
];

const cards = [
  {
    title: "Blog Post 1",
    image: require("./assets/background11.jpg"),
    subtitle: "subtitle",
    caption: "caption",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Blog Post 2",
    image: require("./assets/background12.jpg"),
    subtitle: "subtitle",
    caption: "caption",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Blog Post 3",
    image: require("./assets/background13.jpg"),
    subtitle: "subtitle",
    caption: "caption",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Blog Post 4",
    image: require("./assets/background14.jpg"),
    subtitle: "subtitle",
    caption: "caption",
    logo: require("./assets/logo-react.png")
  }
];

const projects = [
  {
    title: "Tess",
    subtitle: "A podcasting app",
    image: require("./assets/background13.jpg"),
    logo: require("./assets/logo-studio.png"),
    author: "Tess Technologies Team",
    avatar: require("./assets/avatar.jpg"),
    caption: "Create your own podcast on mobile."
  }
];
