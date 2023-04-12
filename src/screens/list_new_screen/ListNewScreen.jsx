import { View, Text } from 'react-native'
import React from 'react'
import TabSlideCategoryPlace from '@component/tab_slide_category_place/TabSlideCategoryPlace'
import styles from './ListNewScreenStyle'
import OptionView from '@component/option_view/OptionView'
import { ScrollView } from 'react-native'

const ListNewScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{marginTop:12}}>
        <TabSlideCategoryPlace/>
      </View>
    </ScrollView>
  )
}

export default ListNewScreen