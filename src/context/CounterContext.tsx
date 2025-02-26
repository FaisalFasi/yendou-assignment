// src/context/CounterContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of the context
interface CounterContextType {
  count: number;
  increment: () => void;
}

// Create the context
const CounterContext = createContext<CounterContextType | undefined>(undefined);

// Create a provider component
export const CounterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};

// Custom hook to use the CounterContext
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
