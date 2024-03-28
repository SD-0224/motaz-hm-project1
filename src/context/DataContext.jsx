import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utilities/fetch";

const path = "https://tap-web-1.herokuapp.com/topics/list";

const DataContext = createContext();

export const DataPrvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setData(await fetchData(path));
    })();
  }, []);

  return <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>;
};

export const useData = () => {
  return useContext(DataContext);
};
