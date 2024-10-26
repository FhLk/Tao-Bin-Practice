"use client"
import React, { createContext, useContext, useState } from 'react';

interface DataDrink {
  name : string
  price : number
  category : string
  img : string
}

interface DataContextType {
  data: DataDrink | null;
  setData: React.Dispatch<React.SetStateAction<DataDrink | null>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<DataDrink | null>(null);

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within a DataProvider");
  return context;
};