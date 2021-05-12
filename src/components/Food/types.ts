import { Food } from "../../types/types";

export default interface IProps {
  food: any;
  handleEditFood: (food: Food) => void;
  handleDelete: (foodId: number) => void;
}

export type StyleProps = {
  available: boolean;
};
