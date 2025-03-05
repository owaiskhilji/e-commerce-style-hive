// import { createContext } from "react"
// const countContext = createContext()

// export { countContext }


import { createContext, useState,useEffect } from "react";

export const countContext = createContext({
  countvalue: 0,
  setcountvalue: (value: number) => {}
});

export function CountProvider({ children }: { children: React.ReactNode }) {
  const [countvalue, setcountvalue] = useState(0);
  const [getdataLoaded , setgetdataLoaded] = useState<boolean>(false)



  useEffect(()=>{
  const storedData = localStorage.getItem("productData")
  if (storedData) {
  setcountvalue(JSON.parse(storedData))
  }
  setgetdataLoaded(true)
},[])
useEffect(()=>{
  if (getdataLoaded && countvalue > 0) {
      localStorage.setItem("productData",JSON.stringify(countvalue))
  }
},[countvalue,getdataLoaded])





  return (
    <countContext.Provider value={{ countvalue, setcountvalue }}>
      {children}
    </countContext.Provider>
  );
}
