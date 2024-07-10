import { ChangeEvent } from "react";

export interface TrashBin {
  id: number;
  location: string;
  fillLevel: number;
}

export interface ContextValueSearch {
  fetchData: () => void;
  trashBins: TrashBin[];
  inputSearch: string;
  setInputSearch: (input: string) => void;
  selectId: string;
  selectFillLevel: string;
  handleSelectId: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleSelectFillLevel: (e: ChangeEvent<HTMLSelectElement>) => void;
}
