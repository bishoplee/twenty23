import { StyleSheet, Text, ScrollView, View, FlatList, ActivityIndicator } from 'react-native'
import { StatusBar } from "expo-status-bar";

import ProjectListItem from '@components/core/ProjectListItem'

const days = [...Array(24)].map((v, i) => i + 1)

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        renderItem={({ item }) => <ProjectListItem project={item} />}
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
