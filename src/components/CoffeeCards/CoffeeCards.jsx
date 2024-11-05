import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { useEffect, useState } from "react";

export default function CoffeeCards() {
  const navigate = useNavigate();
  const [coffees, setCoffees] = useState([]);
  const { categoryId } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    if (categoryId) {
      const filteredCategory = [...data].filter(
        (coffee) => coffee.category === categoryId
      );
      setCoffees(filteredCategory);
    } else {
      setCoffees(data.slice(0, 6));
    }
  }, [categoryId, data]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
      <button onClick={() => navigate("/coffees")} className="btn">
        View All
      </button>
    </div>
  );
}
