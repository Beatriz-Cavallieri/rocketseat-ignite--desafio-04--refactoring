import { Food } from "../../types/types";

export default interface IProps {
    food: any;
    available: boolean;
    handleEditFood: (food: Food) => void;
    handleDelete: (foodId: number) => void;
}

export type StyleProps = Partial<IProps>