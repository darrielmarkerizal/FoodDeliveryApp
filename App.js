import { StatusBar } from 'expo-status-bar';
import { Switch, Text, View, TouchableOpacity, Image, Linking  } from 'react-native';
import { useColorScheme } from 'nativewind';



export default function App() {

  const youtubeChannelLink = 'https://www.youtube.com/@WebMind1s/?sub_confirmation=1';
  const instagramLink = 'https://www.instagram.com/webmind1s/';
  const tiktokLink = 'https://www.tiktok.com/@webmind1s';

 const {colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <View className="flex-1 items-center justify-center bg-gradient-to-tr from-sky-100 via-lime-600 to-sky-400 dark:bg-black">
     <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      <Text className="text-blue-300 dark:text-yellow-50 text-lg font-bold">Code With Web Minds</Text>
      <View className="flex flex-row p-6 space-x-5">
      <TouchableOpacity onPress={() => Linking.openURL(youtubeChannelLink)}>
        <Text className="dark:text-blue-300 font-bold">YouTube</Text>
        <Image source={{ uri: 'https://i.ibb.co/QPvyt11/youtube-image-1.png' }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(instagramLink)}>
        <Text className="dark:text-blue-300 font-bold">Instagram</Text>
        <Image source={{ uri: 'https://i.ibb.co/tzxpXNP/instagram.png' }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(tiktokLink)}>
        <Text className="dark:text-blue-300 font-bold">TikTok</Text>
        <Image source={{ uri: 'https://i.ibb.co/JrV2JTH/tiktok.png' }} />
      </TouchableOpacity>
    </View>
      {/* set the charger and the status */}
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
