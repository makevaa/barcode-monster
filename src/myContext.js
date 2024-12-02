// Code modified from guide by Fahdkassim:
// https://medium.com/@fahdkassim/simplifying-data-sharing-in-react-with-context-provider-and-usecontext-hook-da8a903a0b56

// Context to share data over multiple components
import { useState, createContext, useContext } from 'react';

export const DataContext = createContext();

export function DataProvider ({children}) {
  const [defeatedMonsters, setDefeatedMonsters] = useState([]);
  return <DataContext.Provider value={ {defeatedMonsters, setDefeatedMonsters} }>{children}</DataContext.Provider>;
}

