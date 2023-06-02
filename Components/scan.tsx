import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import Loading from './Loading';

const Scan = () => {


  // useEffect(async () => {
  //   const newCameraPermission = await Camera.requestCameraPermission();
  //   const newMicrophonePermission = await Camera.requestMicrophonePermission();
  // }, []);

  const devices = useCameraDevices();
  const device = devices.front;
  if (device == null) {
    return <Loading />;
  }

  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
};

export default Scan;
