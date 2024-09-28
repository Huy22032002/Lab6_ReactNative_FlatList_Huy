import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'ca nau lau, nau mi mini..',
    imgSrc: require('./1.png'),
    price: '69.000 đ',
  },
  {
    id: '2',
    title: '1KG KHO GA BO TOI',
    imgSrc: require('./2.png'),
    price: '69.000 đ',
  },
  {
    id: '3',
    title: 'Xe Can Cau Da Nang',
    imgSrc: require('./3.png'),
    price: '69.000 đ',
  },
  {
    id: '4',
    title: 'Do choi dang mo hinh',
    imgSrc: require('./4.png'),
    price: '69.000 đ',
  },
  {
    id: '5',
    title: 'Lanh dao gian don',
    imgSrc: require('./5.png'),
    price: '69.000 đ',
  },
  {
    id: '6',
    title: 'Hieu long con tre',
    imgSrc: require('./4.png'),
    price: '69.000 đ',
  },
  {
    id: '7',
    title: 'Hieu long con tre',
    imgSrc: require('./5.png'),
    price: '69.000 đ',
  },
  {
    id: '8',
    title: 'Hieu long con tre',
    imgSrc: require('./1.png'),
    price: '69.000 đ',
  },
];

type ItemProps = {
  title: string,
  imgSrc: any,
  price: string,
};

const Item = ({imgSrc, title,price }: ItemProps) => (
  <ScrollView>
    <View style={styles.item}>
      <Image src={imgSrc} />
      <Text>{title} </Text>
      <Text> {price}</Text>
    </View>
  </ScrollView>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={({ item }) => (
          <Item title={item.title} imgSrc={item.imgSrc} shop={item.shop} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 15,
  },
  button: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default App;
