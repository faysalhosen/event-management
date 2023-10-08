import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import Card from "../Shared/Card/Card";

const Home = () => {
  const Alldata = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Alldata?.map((data) => (
          <Card key={data.id} data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
