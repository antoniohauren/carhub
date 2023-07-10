type CarFilter = {
  manufacturer: string;
  model: string;
  fuel: string;
  year: number;
  limit: number;
};

export async function fetchCars(filters: CarFilter) {
  const { fuel, limit, manufacturer, model, year } = filters;

  const url = new URL("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars");

  url.searchParams.append("fuel", fuel || "");
  url.searchParams.append("limit", limit.toString());
  url.searchParams.append("manufacturer", manufacturer);
  url.searchParams.append("model", model);
  url.searchParams.append("year", year.toString());

  const headers = {
    "X-RapidAPI-Key": "0491963015mshba2f5e0661ebf4ap175eddjsn1f27dcff6301",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(url.toString(), {
    headers,
  });

  const result = await response.json();

  return result;
}
