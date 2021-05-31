import AsyncStorageMobile from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Platform } from 'react-native';

const AsyncStorage = Platform.OS === 'web' ? localStorage : AsyncStorageMobile;

interface Props {
  storeKey?: string;
  children: ReactNode;
  initialData?: any;
}

interface ContextProps {
  data: { [key: string]: any };
  setDataToStore: (arg0: object) => void;
}

const initialContext: ContextProps = {
  data: {},
  setDataToStore: (arg0: object) => {
    console.log(arg0);
  }
};
export const BhandaarContext = createContext(initialContext);

const Store = ({ storeKey, initialData={}, children }: Props) => {
  const [dataRetrieved, setDataRetrieved] = useState(false);
  const [data, setData] = useState(initialData);

  const getDataFromAsync = async () => {
    let asyncData;
    try {
      const dataString = await AsyncStorage.getItem(storeKey);
      asyncData = dataString && (await JSON.parse(dataString));
      console.log(storeKey, 'Data fetched from async', asyncData);
      if (asyncData) setData(asyncData);
      setDataRetrieved(true);
    } catch (error) {
      console.error(error);
    }
    return asyncData;
  };

  const setDataToStore = async (newData: object) => {
    try {
      const updatedData = { ...data, ...newData };
      setData(updatedData);
      const dataString = JSON.stringify(updatedData);
      await AsyncStorage.setItem(storeKey, dataString);
      console.log(storeKey, 'Data updated', newData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDataFromAsync();
  }, []);

  return (
    <BhandaarContext.Provider value={{ data, setDataToStore }}>
      {dataRetrieved && children}
    </BhandaarContext.Provider>
  );
};

Store.defaultProps = {
  storeKey: 'STORE_DEFAULT_KEY'
};

export default Store;