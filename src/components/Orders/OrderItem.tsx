import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';

type RewardItemProps = {
  image: string;
  text: string;
  price: number;
  UiD: string;
};

const OrderItem = ({image, text, price, UiD}: RewardItemProps) => {
  console.log(image);
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.imgWrapper}>
          <Image
            style={styles.pImg}
            source={{
              uri: image,
            }}
          />
        </View>
        <View style={styles.wrapDesc}>
          <Text style={styles.pTitle}>{text}</Text>
          <Text style={styles.pPrice}>Price :-{price}</Text>
        </View>
      </View>
      <View>
        <Button
          color={'#FF4D00'}
          onPress={() => {
            console.log('Im Buying', UiD, Text);
          }}
          title="Buy"
        />
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  pImg: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  pTitle: {
    fontWeight: '800',
    fontSize: 24,
  },
  pPrice: {
    fontWeight: '500',
    fontSize: 18,
  },
  wrapDesc: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  imgWrapper: {
    padding: 20,
  },
  wrapper: {
    backgroundColor: '#D9D9D9',
    margin: 20,
    borderRadius: 25,
  },
});
