import React, { useState } from 'react';
import { View, FlatList, Text, Button } from 'react-native';

const data = [
  { id: 1, title: 'Bài viết 1', time: '2022-11-01T13:00:00Z' },
  { id: 2, title: 'Bài viết 2', time: '2022-11-02T10:30:00Z' },
  { id: 3, title: 'Bài viết 3', time: '2022-11-03T14:45:00Z' },
  { id: 4, title: 'Bài viết 4', time: '2022-11-04T09:15:00Z' },
  { id: 5, title: 'Bài viết 5', time: '2022-11-05T11:50:00Z' }
];

const OptionView = () => {
  const [isLatestToOldest, setIsLatestToOldest] = useState(true);

  const toggleOrder = () => setIsLatestToOldest(!isLatestToOldest);

  const sortedData = [...data].sort((a, b) => {
    if (isLatestToOldest) {
      return new Date(b.time) - new Date(a.time);
    } else {
      return new Date(a.time) - new Date(b.time);
    }
  });

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.title}</Text>
      <Text>{item.time}</Text>
    </View>
  );

  return (
    <View>
      <Button title={isLatestToOldest ? 'Mới nhất đến cũ nhất' : 'Cũ nhất đến mới nhất'} onPress={toggleOrder} />
      <FlatList data={sortedData} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
    </View>
  );
};

export default OptionView;