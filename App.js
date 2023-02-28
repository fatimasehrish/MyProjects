import { StatusBar } from 'expo-status-bar';
import { Touchable, TouchableOpacity } from 'react-native';
import { Image,StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1,backgroundColor:'pink',flexDirection:'column'}}>
      <Text>Start</Text>
      <StatusBar style="auto" />

      <View style={{flex:0.2,backgroundColor:'blue',alignItems:'center',justifyContent:'center'}}>
      <Image style={{height:'20',width:'20'}} source ={require("./assets/icon.png")}></Image>
      </View>

      <View style={{flex:0.6,backgroundColor:'brown',alignItems:'center',justifyContent:'center'}}>
      <Text style={{backgroundColor:'yellow',marginBottom:'10',fontSize:'12',fontStyle:'normal'}}>LOGIN</Text>
      <TextInput style={{width:'10',height:'10',backgroundColor:'white',marginBottom:'14'}}></TextInput>
      <TextInput style={{width:'10',height:'10',backgroundColor:'green',marginBottom:'14'}}></TextInput>
      </View>

      <View style={{flex:0.2,backgroundColor:'grey'}}>
        <TouchableOpacity style={{width:'10',height:'10',justifyContent:'center',alignItems:'center'}}>
        <Text style={{backgroundColor:'white',fontSize:'12',fontStyle:'italic'}}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'10',height:'10',justifyContent:'center',alignItems:'center'}}>
        <Text style={{backgroundColor:'white',fontSize:'12',fontStyle:'italic'}}>FORGOTTEN</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
const imageStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
