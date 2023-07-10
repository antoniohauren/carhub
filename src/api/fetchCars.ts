type CarFilter = {
  manufacturer: string;
  model: string;
  fuel: string;
  year: number;
  limit: number;
};

export async function fetchCars(filters: CarFilter) {
  const { fuel, limit, manufacturer, model, year } = filters;

  const url = new URL(process.env.RAPID_BASEURL || "");

  url.searchParams.append("fuel", fuel || "");
  url.searchParams.append("limit", limit.toString());
  url.searchParams.append("manufacturer", manufacturer);
  url.searchParams.append("model", model);
  url.searchParams.append("year", year.toString());

  const headers = {
    "X-RapidAPI-Key": process.env.RAPID_KEY || "",
    "X-RapidAPI-Host": process.env.RAPID_HOST || "",
  };

  const response = await fetch(url.toString(), {
    headers,
  });

  const result = await response.json();

  return result;
}
