// import { createContext } from "react"
// const countContext = createContext()

// export { countContext }


import { createContext, useState } from "react";

export const countContext = createContext({
  countvalue: 0,
  setcountvalue: (value: number) => {}
});

export function CountProvider({ children }: { children: React.ReactNode }) {
  const [countvalue, setcountvalue] = useState(0);

  return (
    <countContext.Provider value={{ countvalue, setcountvalue }}>
      {children}
    </countContext.Provider>
  );
}
