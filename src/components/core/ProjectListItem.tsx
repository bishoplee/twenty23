import { Link } from "expo-router"
import { Pressable, StyleSheet, Text, View } from "react-native"

type projectListItem = {
  project: number
}

const ProjectListItem = ({ project }: projectListItem) => {
  return (
    <Link href={`/projects/project${project}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{`${project}`}</Text>
      </Pressable>    
    </Link>
  )
}

const styles = StyleSheet.create({
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
    fontSize: 40,
    fontWeight: '300',
    fontFamily: "Dancing"
  }
})

export default ProjectListItem