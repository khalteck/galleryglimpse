import { IoImage } from "react-icons/io5";
import PropTypes from "prop-types";

const BtnSecondary = ({ action, title, type, disabled }) => {
  return (
    <button onClick={action} disabled={disabled} className="btn-secondary">
      {title}
    </button>
  );
};

export default BtnSecondary;

//define proptypes
BtnSecondary.propTypes = {
  action: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
};
