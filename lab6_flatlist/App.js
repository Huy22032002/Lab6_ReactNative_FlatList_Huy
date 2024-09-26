import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,ScrollView
} from 'react-native';

const images = {
  1: require('./ca_nau_lau.png'),
  2: require('./ga_bo_toi.png'),
  3: require('./xa_can_cau.png'),
  4: require('./hieu_long_con_tre.png'),
  5: require('./lanh_dao_gian_don.png'),
  6: require('./ca_nau_lau.png'),
};
const DATA = [
  {
    id: '1',
    title: 'ca nau lau, nau mi mini..',
    imgSrc: images['1'],
    shop: 'Devang',
  },
  {
    id: '2',
    title: '1KG KHO GA BO TOI',
    imgSrc: images['2'],
    shop: 'Devang',
  },
  {
    id: '3',
    title: 'Xe Can Cau Da Nang',
    imgSrc: images['3'],
    shop: 'Devang',
  },
  {
    id: '4',
    title: 'Do choi dang mo hinh',
    imgSrc: images['4'],
    shop: 'Devang',
  },
  {
    id: '5',
    title: 'Lanh dao gian don',
    imgSrc: images['5'],
    shop: 'Devang',
  },
  {
    id: '6',
    title: 'Hieu long con tre',
    imgSrc: images['6'],
    shop: 'Devang',
  },
  {
    id: '7',
    title: 'Hieu long con tre',
    imgSrc: images['6'],
    shop: 'Devang',
  },
  {
    id: '8',
    title: 'Hieu long con tre',
    imgSrc: images['6'],
    shop: 'Devang',
  },
];

type ItemProps = {
  title: string,
  onPress: () => void,
  imgSrc: any,
  shop: string,
};

const Item = ({ title, onPress, imgSrc, shop }: ItemProps) => (
  <ScrollView>
  <View style={styles.item}>
    <Image source={imgSrc} style={styles.image} />
    <View>
      <Text style={{fontWeight:'bold'}}>{title}</Text>
      <Text> shop: {shop} </Text>
    </View>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}> Chat</Text>
    </TouchableOpacity>
  </View>
  </ScrollView>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA} 
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
