export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "0491963015mshba2f5e0661ebf4ap175eddjsn1f27dcff6301",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera",
    {
      headers,
    }
  );

  const result = await response.json();

  return result;
}
