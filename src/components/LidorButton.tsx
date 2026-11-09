import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const LidorButton = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="counter" type="button" onClick={onClick}>
      {children}
    </button>
  );
};
