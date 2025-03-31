import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={titleBox}>
        <Text style={titleText}>GalloPromo</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subTitle}>Calculadora de Promoções</Text>
        <View>
          <Text style={styles.label}>Valor do produto:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height ?? ''}
            placeholder='Ex. 100,00'
            keyboardType='numeric'
          />
        </View>

        <View style={{marginTop: 25}}>
          <Text style={styles.label}>Porcentagem de Promoção:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={height ?? ''}
            placeholder='Ex. 20%'
            keyboardType='numeric'
          />
        </View>

        <TouchableOpacity style={style.button}
        onPress={() => validatePreco()}>
          
        </TouchableOpacity>


      </View>

    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf1f4',
  },

  TitleBox: {
    alignItems: "center",
    justifyContent: 'flex-end',
    height:100,
    backgroundColor:'#edf1f4',
    borderBottomStartRadius: 25,
    borderBottomEndRadius:25,
  },
  titleText: {
    color:'#edf1f4',
    fontSize:28,
    fontWeight:'bold',
    marginBottom:20,
  }
});
