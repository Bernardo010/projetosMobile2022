import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button ,Text, View ,alert,SafeAreaView } from 'react-native';
import constants from 'expo-constants';

function separetor () {
  return <view style={style separator} />
}


export default function app() {
  return (
    <SafeAreaView style={StyleSheet.container} ><view>
      <Button title="aperte aqui" onPress={()  => {alert ('simple')
     ) }}/>
    </view>
    <sparator/>
    <view>
      <text style={style.title}>
     adjust the color in a way that looks standard on each plataform. On IOS,the color prop controld the color of the text. On Android, the color adjusts the background color of the button .
     </text>
     <Button 
     title="aperte aqui"
     color="#f194ff"
     onPress={() => {alert('Button with adjusted color Pressed')}}
     />
     </view>
     <separetor />
      </view>  
       <Text style={StyleSheet.title}>
this layout strategy lets the title define de width of the Button.</Text>
<view style={styles.fixtotext}>
<Button
title="botão esquerdo"
OnPress={() => {alert('left Button pressed ')}}
/>
<Button
title="botão direto "
OnPress={() => {alert('right button pressed')}}

