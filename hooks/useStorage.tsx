import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  const getItem = async (key: string) => {
    try {
      const item = await AsyncStorage.getItem(key);
      if (item) return JSON.parse(item);

      return [];
    } catch (error) {
      console.log("Erro ao tentar pegar do localStorage");
      return [];
    }
  };

  const saveItem = async (key: string, item: string) => {
    await AsyncStorage.setItem(key, item);
  };

  const removeItem = async (key: string) => {
    await AsyncStorage.removeItem(key);
  };

  return {
    getItem,
    saveItem,
    removeItem,
  };
};

export default useStorage;
