const Button = ({ msg, px, py }) => {
  return (
    <button
      className={`text-primary bg-white hover:text-white hover:bg-primary px-${px} py-3 font-bold transition duration-300 ease-in-out rounded-sm`}
    >
      {msg}
    </button>
  );
};

export default Button;
