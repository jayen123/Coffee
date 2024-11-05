import PropTypes from "prop-types";

export default function CoffeeCard({ coffee }) {
  console.log(coffee);

  const { name, image, category } = coffee || {};

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="flex-grow">
        <img
        className="h-[232px] object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{category}</button>
        </div>
      </div>
    </div>
  );
}

CoffeeCard.propTypes = {
  coffee: PropTypes.object.isRequired,
};
