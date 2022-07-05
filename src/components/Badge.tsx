import React, { FC } from "react";
//@ts-ignore
import { ReactComponent as Remove } from "../assets/images/icon-remove.svg";

interface BadgeProps {
  children?: string;
  variant?: string;
  colorScheme?: string;
  onClear?: () => void;
  onClick?: () => void;
}

export const Badge: FC<BadgeProps> = ({
  children,
  variant = "basic",
  colorScheme = "light",
  onClear,
  onClick,
}) => {
  return (
    <div
      className={`badge badge--${variant} badge--${colorScheme}`}
      onClick={onClick}
    >
      <span>{children}</span>
      {variant === "clearable" && (
        <div className="badge-remover" onClick={onClear}>
          <Remove />
        </div>
      )}
    </div>
  );
};
