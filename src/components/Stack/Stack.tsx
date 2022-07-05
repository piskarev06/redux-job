import React, { FC } from "react";

import s from "./Stack.module.scss";

interface StackProps {
  children?: any;
  pos?: string;
}

export const Stack: FC<StackProps> = ({ children, pos }) => {
  return (
    <div
      className={s.stack}
      style={{
        justifyContent: pos === "center" ? "center" : `flex-${pos}`,
      }}
    >
      {children}
    </div>
  );
};
