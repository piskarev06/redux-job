import React, { FC, ReactElement } from "react";

interface CardProps {
  children?: ReactElement;
  isFeatured?: boolean;
  className?: string;
}

export const Card: FC<CardProps> = ({ children, isFeatured, className }) => {
  return (
    <div
      className={`card${isFeatured ? " card--featured" : ""}${
        className ? " " + className : ""
      }`}
    >
      {children}
    </div>
  );
};
