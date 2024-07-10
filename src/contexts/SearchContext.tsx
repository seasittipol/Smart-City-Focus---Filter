import React, { ChangeEvent, createContext, useState } from "react";
import { ContextValueSearch, TrashBin } from "../types/type";
import { mockCity } from "../mock/city";

const defaultValue: ContextValueSearch = {
  fetchData: () => {},
  trashBins: [],
  inputSearch: "",
  setInputSearch: () => {},
  selectId: "",
  selectFillLevel: "",
  handleSelectId: () => {},
  handleSelectFillLevel: () => {},
};

export const SearchContext = createContext<ContextValueSearch>(defaultValue);

export default function SearchContextProvider({ children }: any) {
  const [trashBins, setTrashBins] = useState<TrashBin[]>([]);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [selectId, setSelectId] = useState<string>("");
  const [selectFillLevel, setSelectFillLevel] = useState<string>("");

  const fetchData = async () => {
    try {
      //   const response = await axios.get("https://api.example.com/trash-bins");
      setTrashBins(mockCity);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectId = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectFillLevel("fill level");
    setSelectId(e.target.value);
  };

  const handleSelectFillLevel = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectId("id");
    setSelectFillLevel(e.target.value);
  };

  const constextValue = {
    fetchData,
    trashBins,
    inputSearch,
    setInputSearch,
    selectId,
    selectFillLevel,
    handleSelectId,
    handleSelectFillLevel,
  };

  return (
    <SearchContext.Provider value={constextValue}>
      {children}
    </SearchContext.Provider>
  );
}
