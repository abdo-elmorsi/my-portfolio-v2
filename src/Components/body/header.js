function Header({ Name, Desc }) {
  return (
    <header className="py-20">
      <h2 className="text-4xl font-bold">{Name}</h2>
      <div className="w-10 mx-auto mb-5 mt-3 border-primary border-2"></div>
      <p>{Desc}</p>
    </header>
  );
}
export default Header;
