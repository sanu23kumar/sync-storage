import { useContext } from "react";
import { BhandaarContext } from "./Store";

const useStore = <T extends object>(storeKey: string) => {
  const { data: storeData, setDataToStore } = useContext(BhandaarContext);
  let data: T = storeData[storeKey];

  const setData = (newData: T) => {
    setDataToStore({
      [storeKey]:
        typeof newData === "object" && newData !== null
          ? { ...storeData[storeKey], ...newData }
          : newData,
    });
  };
  return { data, setData };
};

export default useStore;
