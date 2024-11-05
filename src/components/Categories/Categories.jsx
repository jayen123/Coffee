import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
export default function Categories({ categories }) {
  return (
    <div role="tablist" className="tabs tabs-lifted mb-5">
      {categories.map((category) => (
        <NavLink className={({isActive}) => `tab text-2xl ${isActive ? `tab-active` : ``}` }  to={`category/${category.category}`} key={category.id} role="tab">
          {category.category}
        </NavLink>
      ))}
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};
