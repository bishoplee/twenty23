import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native'

import DayListItem from './src/components/core/DayListItem'

const days = [...Array(24)].map((v, i) => i + 1)

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        renderItem={({ item }) => <DayListItem day={item} />}
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
  },
  listView: {
    gap: 10,
    padding: 16,
  },
  column: {
    gap: 10,
  },
});
