import { Dispatch, SetStateAction } from "react";

export type SearchManufacturerProps = {
  manufacturer: string;
  setManufacturer: Dispatch<SetStateAction<string>>;
};
