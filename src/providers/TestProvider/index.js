import { createContext, useContext } from "react";

const TestProviderContext = createContext();

export const TestProvider = ({ children }) => {
  //logicas
  const test = () => {
    console.log("test");
  };

  const test2 = () => {
    console.log("test2");
  };

  return (
    <TestProviderContext.Provider value={{ test, test2 }}>
      {children}
    </TestProviderContext.Provider>
  );
};

export const useTestProvider = () => useContext(TestProviderContext);
