

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto flex flex-wrap justify-between">
              <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
                  <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
                  <ul>
                      <li><a href="#">Concerts</a></li>
                      <li><a href="#">Theater Shows</a></li>
                      <li><a href="#">Movie Premieres</a></li>
                  </ul>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
                  <h2 className="text-xl font-semibold mb-4">Venue Information</h2>
                  <ul>
                      <li><a href="#">Locations</a></li>
                      <li><a href="#">Seating Charts</a></li>
                      <li><a href="#">Parking</a></li>
                  </ul>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
                  <h2 className="text-xl font-semibold mb-4">Ticketing</h2>
                  <ul>
                      <li><a href="#">Buy Tickets</a></li>
                      <li><a href="#">Ticket Prices</a></li>
                      <li><a href="#">Group Discounts</a></li>
                  </ul>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-4">
                  <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
                  <ul>
                      <li><a href="#">Contact</a></li>
                      <li><a href="#">Social Media</a></li>
                      <li><a href="#">Newsletter</a></li>
                  </ul>
              </div>
          </div>
      </footer>
  
    );
  };
  
  export default Footer;
  