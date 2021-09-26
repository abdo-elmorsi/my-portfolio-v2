const Button = ({ msg }) => {
  return (
    <button className="text-primary bg-white hover:text-white hover:bg-primary px-6 py-3 font-bold transition duration-300 ease-in-out">
      {msg}
    </button>
  );
};

export default Button;
