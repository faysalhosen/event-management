const Card = ({data}) => {
    const {id, image, title, details, concert_price, } = data || {};
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-5 pt-5">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{concert_price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
