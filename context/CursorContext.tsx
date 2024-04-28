"use client";

import { Dispatch, ReactNode, createContext, useState } from "react";

interface ContainerProps {
  children: ReactNode;
}

interface ContextType {
  isHovered: boolean;
  setIsHovered: Dispatch<React.SetStateAction<boolean>>;
}

const ContextState = {
  isHovered: false,
  setIsHovered: () => "",
};

const CursorContext = createContext<ContextType>(ContextState);

const CursorProvider = (props: ContainerProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CursorContext.Provider value={{ isHovered, setIsHovered }}>
      {props.children}
    </CursorContext.Provider>
  );
};

export { CursorContext, CursorProvider };
