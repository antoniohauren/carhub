import { CarCardProps } from "../CarCard";

export type CarDetailsProps = {
  isOpen?: boolean;
  closeModal: () => void;
  car: CarCardProps["car"];
};
