import "./Header.css";
function Header({ Name, Desc }) {
  return (
    <header className="my-20">
      <h2 className="text-4xl font-bold">{Name && Name}</h2>
      <div className="w-10 mx-auto mb-5 mt-3 border-primary border-2 transition-all duration-500 ease-in-out"></div>
      {Desc && <p className="italic">{Desc}</p>}
    </header>
  );
}
export default Header;
