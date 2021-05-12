import { Food } from "../../types/types";

export default interface IProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (food: Food) => void;
  editingFood: Food;
}
