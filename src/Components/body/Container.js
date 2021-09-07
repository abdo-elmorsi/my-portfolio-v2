function Container({ children }) {
  return (
    <div
      className="w-full flex justify-between bg-no-repeat bg-cover bg-center bg-fixed 2xl:px-28"
      style={{ backgroundImage: "url(./images/page-bg.jpg)" }}
    >
      {children}
    </div>
  );
}
export default Container;
