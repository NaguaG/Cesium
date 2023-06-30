const Input = ({
  value,
  disabled,
  onChange,
  type,
  id,
  name,
  autoComplete,
  required,
}) => {
  return (
    <input
      value={value}
      disabled={disabled}
      id={id}
      name={name}
      autoComplete={autoComplete}
      required={required}
      className="px-3 block w-11/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      onChange={onChange}
      type={type}
    />
  );
};

export default Input;
