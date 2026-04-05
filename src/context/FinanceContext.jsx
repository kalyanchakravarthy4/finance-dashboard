import { createContext, useState, useEffect } from "react";
import { mockData } from "../data/mockData";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : mockData;
  });

  const [role, setRole] = useState("viewer");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        setTransactions,
        role,
        setRole,
        filter,
        setFilter
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};