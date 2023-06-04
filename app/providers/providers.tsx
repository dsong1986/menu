"use client";

import { SessionProvider } from "next-auth/react";
import { createContext, useContext, useState } from "react";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

interface CurrentBusinessContextType {
  id:string;
  name?: string;
  address1?: string;
  address2?:string;
  city?: string;
  state?:string;
  country?:string;
  tel?: string;
}

export const CurrentBusinessContext = createContext<CurrentBusinessContextType | null>(null);



export const useCurrentBusiness = () => {
  const currentBusinessContext = useContext(CurrentBusinessContext);

  if (!currentBusinessContext) {
    throw new Error(
      "useCurrentUser has to be used within <currentBusinessContext.Provider>"
    );
  }

  return currentBusinessContext;
}

export const  BusinessProvider = ({ children }: Props) => {
 
  const currentBusiness = useContext(CurrentBusinessContext);
 
  return (
    <CurrentBusinessContext.Provider value={currentBusiness}>
      {children}
    </CurrentBusinessContext.Provider>
  );
}

