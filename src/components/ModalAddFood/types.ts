import { Food } from "../../types/types";

export default interface IProps {
    isOpen: boolean;
     setIsOpen: () => void;
     handleAddFood: (food: Food) => void
}