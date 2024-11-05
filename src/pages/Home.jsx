import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
      {/* Banner */}
      <Banner />
      <Header 
      title="Coffees With Categories"
      description="This is a list of categories"
      />
    </div>
  );
}
