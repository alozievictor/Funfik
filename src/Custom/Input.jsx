import React from "react";
import PropTypes from "prop-types";

const Input = ({ label, name, type, placeholder, form, icon }) => {
  return (
    <div className="relative h-11">
      <div className="mb-5 flex flex-col ">
        <label
          htmlFor={name}
          className="leading-7 flex gap-2 mb-2 text-sm text-gray-600 font-semibold"
        >
          {icon}
          {label}
        </label>
        <input
          name={name}
          type={type}
          className="w-full bg-white rounded-md border focus:border-blue-900 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder=""
        />
        {form.getState().submitFailed && form.getState().errors[name] && (
          <small className="text-red-600">{form.getState().errors[name]}</small>
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  form: PropTypes.object.isRequired,
};

export default Input;
