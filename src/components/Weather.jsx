import React from "react";

const Weather = ({ data, locate }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    let value = e.target[0].value;
    locate(value);
    console.log(value);
  };
  return (
    <div className="mx-10 my-10 p-20 border ">
      <form
        className="border rounded-3xl p-4 px-20 w-1/2 text-center flex gap-10"
        onSubmit={handleSearch}
      >
        <input
          name="search"
          className="border p-2 rounded"
          placeholder="Enter Your City  "
          type="text"
        />
        <button className="bg-blue-500 p-2 rounded-2xl"> Search</button>
      </form>
      <div className="text-">
        <div className="flex justify-between px-20 mt-10">
          <h1 className="text-5xl  py-2  font-semibold">
            Temperature: {data?.current?.temp_c}
          </h1>
          <div>
            <h1 className=" py-2  font-semibold">Temperature: {data?.temp}</h1>
            <h1 className=" py-2  font-semibold">
              Feels like{data?.feels_like}
            </h1>
            <h1 className=" py-2  font-semibold">Humidity{data?.humidity}</h1>
          </div>
        </div>
        <div className="flex gap-40 border mt-10">
          {data?.forecast?.forecastday?.map((item) => {
            return (
              <div>
                <h1>{item?.day.condition.text}</h1>
                <img src={item.day.condition.icon} alt="" />
                <h1>{item.day.avgtemp_c}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Weather;
