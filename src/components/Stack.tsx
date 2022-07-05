import React, { FC } from "react";

interface StackProps {
  children?: any;
  pos?: string;
}

export const Stack: FC<StackProps> = ({ children, pos }) => {
  return (
    <div
      className="stack"
      style={{
        justifyContent: pos === "center" ? "center" : `flex-${pos}`,
      }}
    >
      {children}
    </div>
  );
};
