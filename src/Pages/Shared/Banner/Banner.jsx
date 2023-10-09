const Banner = () => {
  return (
    <div>
      <div className=" hero bg-[url('https://i.ibb.co/t34MRPB/cover-image.jpg')] h-[80vh] ">
        <div className="hero-overlay bg- bg-opacity-60 flex flex-col items-center justify-center"></div>
        <div className="text-center">
          <h1 className="text-4xl text-white font-bold"> Upcoming Entertainment Extravaganza</h1>
          <h3 className="text-2xl text-slate-400 py-4"> Get ready for a night of unforgettable entertainment! Join us for an incredible lineup <br /> of shows and  performances that will leave you spellbound</h3>
          <p className="btn btn-primary">join us</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
