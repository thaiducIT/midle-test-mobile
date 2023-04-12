import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import styles from './RenderIItemStyle'
import { useNavigation } from '@react-navigation/native'

const RenderItem = ({ item }) => {
  const navigation=useNavigation()
  return (
    <TouchableOpacity style={styles.list_item_container} onPress={() => navigation.navigate('News', {item:item})}>
        <View style={styles.cover_image_container}>
          <Image
            resizeMode="cover"
            source={{ uri: item.image }}
            style={styles.cover_image}
          />
        </View>
        <View style={styles.news_content_container}>
          <Text style={styles.news_title} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.news_content} numberOfLines={4}>{item.content}</Text>
          <Text style={styles.date} numberOfLines={1}>{item.date}</Text>
        </View>
      </TouchableOpacity>
  )
}

export default RenderItem