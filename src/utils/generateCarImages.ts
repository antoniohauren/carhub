import { CarCardProps } from "@/components/CarCard";

export function generateCarImages(car: CarCardProps["car"], angle?: string) {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  url.searchParams.append("customer", process.env.IMAGIN_KEY || "");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", year.toString());
  url.searchParams.append("angle", `${angle}`);
  url.searchParams.append("", model);

  return `${url}`;
}
