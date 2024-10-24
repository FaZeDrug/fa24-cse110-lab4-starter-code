import { createContext, useState } from "react";
import { Expense } from "../types/types";
//import { Budget } from "../Budget/Budget"; dont uncommeny this

// Exercise: Create add budget to the context DONE


interface AppContextType {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
  budget: number;
}

const initialState: AppContextType = {
  expenses: [],
  setExpenses: () => {},
  budget: 1000
};

export const AppContext = createContext<AppContextType>(initialState);

export const AppProvider = (props: any) => {
  const [expenses, setExpenses] = useState<Expense[]>(initialState.expenses);

  return (
    <AppContext.Provider
      value={{
        expenses: expenses,
        setExpenses: setExpenses,
        budget: 1000
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
