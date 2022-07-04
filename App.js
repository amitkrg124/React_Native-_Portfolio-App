import * as React from 'react';
import { View, Text, StatusBar, Image, Dimensions, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProjectDetails from './src/components/ProjectDetails';
import Skills from './src/components/Skills';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Layout = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

const Colors = {
  theme: "#DCDCDC",
  white: '#fff',
  greyish: '#a4a4a4',

};

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        backgroundColor={Colors.theme}
      />

      <View
        style={{
          backgroundColor: Colors.theme,
          paddingBottom: Layout.height * 0.17,
          borderBottomLeftRadius: Layout.width * 0.1,
          borderBottomRightRadius: Layout.width * 0.1,
        }}>
        <View
          style={{
            alignItems: 'flex-end',
            paddingHorizontal: 112,
            marginVertical: 5,
          }}>
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            color: 'red',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
          Welcome to my Profile
        </Text>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 122,
            marginVertical: 36,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Image
            source={require('./assets/images/amit.png')}
            style={{ width: 150, height: 150, borderRadius: 75, marginRight: 36 }}
          />
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
            AMIT
          </Text>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 15,
              textAlign: 'center'
            }}>
            REACT NATIVE DEVELOPER
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          backgroundColor: Colors.theme,
          marginHorizontal: 30,
          padding: 20,
          borderRadius: 20,
          elevation: 8,
          marginTop: -Layout.height * 0.15,
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            marginVertical: 30,
          }}>
          <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 30, textAlign: 'center', textDecorationLine: 'underline' }}>
            ABOUT ME
          </Text>
        </View>

        <View style={{ marginVertical: 8 }}>
          <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', textAlign: 'justify' }}>
            I am very ambitious Front-End developer and currently working as a
            React native developer at NETHUES PVT LTD.{'\n'}
            {'\n'}I am looking for a role in established IT company with the
            opportunity to work with the latest technologies on challenging and
            diverse projects. {'\n'}
            {'\n'}I'm quietly confident, naturally curious, and perpetually
            working on improving my chops one design problem at a time. If I
            need to define myself in one sentence that would be a developer
            working with different programming languages like JAVA, JAVASCRIPT,
            HTML, CSS .
          </Text>
        </View>
      </View>
    </View>
  );
}

function SkillsScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.theme }}>
        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 30, textAlign: 'center', textDecorationLine: 'underline' }}>
          Technical Skills </Text>
        <Skills skills={'HTML'} />
        <Skills skills={'CSS'} />
        <Skills skills={'JAVASCRIPT'} />
        <Skills skills={'REACTJS'} />
        <Skills skills={'REACTNATIVE'} />
        <Skills skills={'WORDPRESS'} />
        <Skills skills={'BOOTSTRAP'} />
        <Skills skills={'PHP'} />
      </View>
    </ScrollView>
  );
}

function ProjectScreen() {
  return (
    <ScrollView>
      <View style={{ alignItems: 'center', backgroundColor: Colors.theme, }}>
        <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 30, textAlign: 'center', textDecorationLine: 'underline', marginBottom: 25 }}>My Projects List </Text>
        <ProjectDetails
          title="Github User Search"
          imageSource={require('./assets/images/logo1.png')}
          score={`1. Tecnology used: HTML, CSS, & JavaScript.
 2. This is a basic webpage with search box.
 3. We can search our GitHub user id and show 
     the data of our git hub proﬁle.`}
        />
        <ProjectDetails
          title="Digital Portfolio"
          imageSource={require('./assets/images/logo2.png')}
          score={` 1. Tecnology used: React Js , HTML, CSS, & 
       JavaScript (both frontend & backend).
   2. Hosted Link: https://creative-amit.netlify.app/ `}
        />
        <ProjectDetails
          title="Hand Written Recognisation"
          imageSource={require('./assets/images/logo3.png')}
          score={`    1. Technology used: - Python, ML, NumPy.
      2. It is a ML based Hand written recognization 
         technology in which we train the machine 
         with given data and help to recognize 
         the cherecters.`}
        />
      </View>
    </ScrollView>
  );
}

function ContactScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image style={styles.avatar}
            source={require('./assets/images/amit.png')} />

          <Text style={styles.name}>Amit</Text>
          <Text style={styles.userInfo}>amitkrg124@gmail.com </Text>
          {/* <Text style={styles.userInfo}>Florida </Text> */}
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/color/70/000000/cottage.png' }} />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Dwarka, New Delhi</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/color/344/contacts.png' }} />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>+91-8076458459</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/ios-filled/344/github.png' }} />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>amitkrg124</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/fluency/344/linkedin.png' }} />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>www.linkedin.com/amitkrg124</Text>
          </View>
        </View>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: '600',
  },
  body: {
    backgroundColor: "#778899",
    height: 500,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  }
});
export default function App(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen   icon="home" name="My Profile" component={HomeScreen} />
         */}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="filmstrip-box-multiple" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Skills"
          component={SkillsScreen}
          options={{
            tabBarLabel: 'Skills',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="apps" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Projects"
          component={ProjectScreen}
          options={{
            tabBarLabel: 'Projects',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="image-multiple" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            tabBarLabel: 'Contact',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar-today" color={color} size={size} />
            ),
          }}
        />
        {/* <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Skills" component={SkillsScreen} />
        <Tab.Screen name="Project" component={ProjectScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}