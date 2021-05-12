import React from "react";

export default interface IProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: React.ReactNode;
}
