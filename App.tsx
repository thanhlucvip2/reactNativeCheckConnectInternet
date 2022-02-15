import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
const App = () => {
  const [isConnect, setisConnect] = useState(false);
  const [statusInternet, setstatusInternet] = useState('');
  useEffect(() => {
    NetInfo.addEventListener(state => {
      setstatusInternet(state.type);
      setisConnect(state.isConnected || false);
    });
  }, [isConnect, statusInternet]);

  return (
    <View>
      <Text>{isConnect ? 'true' : 'false'}</Text>
      <Text>{statusInternet}</Text>
    </View>
  );
};
export default App;
