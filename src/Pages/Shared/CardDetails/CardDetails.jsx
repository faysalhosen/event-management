import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const findData = data?.find(service => service.id == id);
    console.log(findData)
    const {image, title, details, concert_price, } = findData;
  return (
    <div>
      <div>
        <div className="card w-96 mx-auto bg-lime-200 shadow-xl">
          <figure className="pt-10">
            <img src={image} alt="Shoes" className="rounded-md" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{concert_price}</p>
            <p>{details}</p>
            <div className="card-actions">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
