"use client"
import React, { createContext, useContext, useState } from 'react';

interface DrinkData {
  name : string
  price : number
  category : string
  img : string
}

interface NewDrinkData {
  name : string
  price : number
  category : string
  img : string
  typeDrink : string
  sugar : {type : string , level : number}
  isTopping: boolean
  isStraw : boolean
  isLid : boolean
}

interface DataContextType {
  data: DrinkData | NewDrinkData;
  setData: React.Dispatch<React.SetStateAction<DrinkData | NewDrinkData>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<DrinkData | NewDrinkData>({name : "", price : 0,category:"",img:""});

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within a DataProvider");
  return context;
};