import { fetchCars } from "@/api/fetchCars";
import { CarCard } from "@/components/CarCard";
import { CustomFilter } from "@/components/CustomFilter";
import { Hero } from "@/components/Hero";
import { SearchBar } from "@/components/SearchBar";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty =
    (!Array.isArray(allCars) && allCars.length < 1) || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <section className="mt-10 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalog</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car: any) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">No Results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </section>
    </main>
  );
}
