// components/InputField.jsx
import { ErrorMessage } from "@hookform/error-message";
import PropTypes from "prop-types";

const InputField = ({ label, name, type, register, errors }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center ">
        <label htmlFor={name} className="mr-2 min-w-24">
          {label}:
        </label>

        <div className="flex-grow relative">
          <input
            type={type}
            id={name}
            className="w-full border-b border-dotted border-black focus:outline-none bg-transparent px-1"
            // placeholder={placeholder}
            {...register(name, {
              valueAsNumber: type === "number",
              valueAsDate: type === "date",
            })}
          />
        </div>

        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <p className="text-red-500">{message}</p>}
        />
      </div>
    </div>
  );
};

// Add PropTypes validation
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

// Default props
InputField.defaultProps = {
  placeholder: "",
};

export default InputField;
