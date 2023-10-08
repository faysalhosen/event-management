import { Link } from "react-router-dom";

const Card = ({data}) => {
    const {id, image, title, details, concert_price, } = data || {};    
  return (
    <div>
      <div className=" text-left card w-96  bg-base-100 shadow-xl">
        <figure className="px-5 pt-5">
          <img
            src={image}
            alt="image"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <h3 className="text-left">{details}</h3>
          <p className="text-left"> price:{concert_price}$</p>
          <div className="card-actions text-left">
            <Link to={`details/${id}`}><button className="btn btn-primary">Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
