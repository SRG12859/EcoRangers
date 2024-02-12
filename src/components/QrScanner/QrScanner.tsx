import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {BagContext} from '../../contexts/BagProvider';

const QrScanner = () => {
  const {setQrScanData}: any = useContext(BagContext);
  return (
    <View style={styles.SC}>
      <View>
        <QRCodeScanner
          onRead={({data}) => {
            setQrScanData(data);
          }}
          topContent={
            <Text style={styles.centerText}>Scan The Qr Code On the Bag.</Text>
          }
          flashMode={RNCamera.Constants.FlashMode.auto}
          reactivate={true}
          reactivateTimeout={10000}
          showMarker={true}
          fadeIn={true}
        />
      </View>
    </View>
  );
};

export default QrScanner;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#f5f5f5',
  },
  SC: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#050505',
  },
});
