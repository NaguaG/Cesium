const Button = ({ label, className, onClick, disabled, Icon }) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`${className} text-white font-bold py-2 px-4 rounded-full mr-2`}>
        {Icon && Icon}
        {label}
      </button>
    </>
  );
};

export default Button;
