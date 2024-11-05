import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Categories from "../components/Categories/Categories";

export default function Home() {
  const categories = useLoaderData();
  console.log(categories);

  return (
    <div>
      {/* Banner */}
      <Banner />
      <Header
        title="Coffees With Categories"
        description="This is a list of categories"
      />
      <Categories categories={categories} />
      <Outlet />
    </div>
  );
}
