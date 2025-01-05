import React, { createContext } from "react";

export const CommonContext = createContext();


export const CommonProvider = (props) => {
  const primaryColor = "#03122b";
  const secondaryColor = "#8993b1";
  const specialColor = "#4CC8B2";
  const hoverColor = "#e7f1ff";

  const value = {
    primaryColor,
    secondaryColor,
    specialColor,
    hoverColor,
  };

  return (
    <CommonContext.Provider value={value}>
      {props.children}
    </CommonContext.Provider>
  );
};
