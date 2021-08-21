function Box({ data }) {
  return data.map((e) => {
    return (
      <div
        key={e.id}
        className={`box-${e.id} w-full lg:w-5/12 mb-5 p-10 text-left bg-third hover:bg-white hover:text-black  rounded transition duration-500 ease-in-out`}
      >
        <div>
          <img src={e.Icon} className="hover:" alt="img" />
        </div>
        <h2 className="text-3xl font-bold mt-5 mb-3">{e.Name}</h2>
        <p>{e.Desc}</p>
      </div>
    );
  });
}
export default Box;
