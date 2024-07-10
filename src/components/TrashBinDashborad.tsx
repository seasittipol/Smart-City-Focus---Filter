import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import {
  ascSortByFillLevel,
  ascSortById,
  dscSortByFillLevel,
  dscSortById,
} from "../utilities/sort";
import useSearch from "../hooks/useSearch";
import { ContextValueSearch } from "../types/type";

export default function TrashBinDashborad() {
  const {
    fetchData,
    trashBins,
    inputSearch,
    setInputSearch,
    selectId,
    selectFillLevel,
    handleSelectId,
    handleSelectFillLevel,
  }: ContextValueSearch = useSearch();

  useEffect(() => {
    fetchData();
  }, []);

  console.log(inputSearch);

  const filteredTrashBins = trashBins
    .filter((trashBin) =>
      trashBin.location.toLowerCase().includes(inputSearch.toLowerCase())
    )
    .sort((a, b) => {
      if (selectId === "Ascending") return ascSortById(a, b);
      if (selectId === "Descending") return dscSortById(a, b);
      if (selectFillLevel === "Ascending") return ascSortByFillLevel(a, b);
      if (selectFillLevel === "Descending") return dscSortByFillLevel(a, b);
      return 0;
    });

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 p-4">
        <input
          className="border focus:outline-none p-2 bg-yellow-50"
          value={inputSearch}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputSearch(e.target.value)
          }
        ></input>
        <select
          className="flex gap-2 flex-col border p-2 focus:outline-none bg-yellow-50"
          onChange={handleSelectId}
        >
          <option disabled selected>
            id
          </option>
          <option>Ascending</option>
          <option>Descending</option>
        </select>
        <select
          className="flex gap-2 flex-col border p-2 focus:outline-none bg-yellow-50"
          onChange={handleSelectFillLevel}
        >
          <option disabled selected>
            fill level
          </option>
          <option>Ascending</option>
          <option>Descending</option>
        </select>
      </div>
      {filteredTrashBins.map((trashBin) => (
        <div key={trashBin.id} className="flex gap-2 px-4">
          <div>{trashBin.id}</div>
          <div>{trashBin.location}</div>
          <div>{trashBin.fillLevel}</div>
        </div>
      ))}
    </div>
  );
}
