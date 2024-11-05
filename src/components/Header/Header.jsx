import PropTypes from "prop-types";
export default function Header({ title, description }) {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
