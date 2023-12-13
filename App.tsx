import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';

const days = [...Array(24)].map((v, i) => i + 1)

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <Text style={styles.text}>{`${item}`}</Text>
          </View>
        )}
        contentContainerStyle={styles.listView}
        columnWrapperStyle={styles.column}
        numColumns={3}
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    // alignItems: 'center' 
    
  },
  listView: {
    gap: 10,
    padding: 16,
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'row',
    // flex: 1,

    // width: "100%",

  },
  column: {
    gap: 10,
  },
  box: {
    aspectRatio: 1,
    backgroundColor: '#F9EDE3',
    flex: 1,
    // width: 'auto',
    padding: 8,
    // marginHorizontal: 32,
    // marginVertical: 16,

    borderColor: '#9B4521',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius:16,

    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#9B4521',
    fontSize: 24,
    fontWeight: '300',
  }
});
