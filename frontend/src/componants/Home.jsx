import React, { useState, useEffect, useRef } from "react";
import Header from "./header";
import Footer from "./Footer";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import slide1 from "../assets/images/slide1.jpeg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide4.jpg";
import ex1 from "../assets/images/ex1.jpeg";
import ex2 from "../assets/images/ex2.jpg";
import ex3 from "../assets/images/ex3.png";
import ex4 from "../assets/images/ex4.jpg";
import ex5 from "../assets/images/ex5.png";
import ex6 from "../assets/images/ex6.jpg";
import offer1 from "../assets/images/offer1.jpg";
import offer2 from "../assets/images/offer2.jpg";
import offer3 from "../assets/images/offer3.jpeg";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [count, setCount] = useState(0);
  const [openBooking, setOpenBooking] = useState(false);
  const [room, setRoom] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const booking2Ref = useRef(null);
  const bookingRoomRef = useRef(null);
  //date picker function
  useEffect(() => {
    const countDate = () => {
      const startTimestamp = startDate.getTime();
      const endTimestamp = endDate.getTime();
      const difference = endTimestamp - startTimestamp;
      const daysDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));
      setCount(daysDifference);
    };

    if (startDate instanceof Date && endDate instanceof Date) {
      countDate();
    }
  }, [startDate, endDate]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const bookingRoom = () => {
    setOpenBooking(!openBooking);
  };

  useEffect(() => {
    if (booking2Ref.current && bookingRoomRef.current) {
      const booking2Rect = booking2Ref.current.getBoundingClientRect();
      bookingRoomRef.current.style.left = `${booking2Rect.left}px`;
      bookingRoomRef.current.style.top = `${booking2Rect.bottom}px`;
    }
  }, [openBooking]);

  // room count + and -
  const roomPlus = () => {
    const c1 = room + 1;
    setRoom(c1);
  };
  const roomMinus = () => {
    if (room != 1) {
      const c2 = room - 1;
      setRoom(c2);
    }
  };
  // adults count + and -
  const adultsPlus = () => {
    const c3 = adults + 1;
    setAdults(c3);
  };
  const adultsMinus = () => {
    if (adults != 1) {
      const c4 = adults - 1;
      setAdults(c4);
    }
  };
  // children count + and -
  const childrenPlus = () => {
    const c5 = children + 1;
    setChildren(c5);
  };
  const childrenMinus = () => {
    if (children != 0) {
      const c6 = children - 1;
      setChildren(c6);
    }
  };

  //destination
  const [isOpen, setIsOpen] = useState(false);
  const [heading, setHeading] = useState("Royal Palmbay Life");
  const [content, setContent] = useState(
    "Take a peak at the first-ever Integrated Resort in Sri Lanka. Envisoned to be the epicentre of modern South Asia, it is an urban sanctuary which includes a 5-Star hotel, residential units, office spaces and a wide range of shopping and entertainment options."
  );
  const [img, setImg] = useState(slide1);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    toggleDropdown();

    if (value == "Royal Palmbay Life") {
      setHeading(value);
      setContent(
        "Take a peak at the first-ever Integrated Resort in Sri Lanka. Envisoned to be the epicentre of modern South Asia, it is an urban sanctuary which includes a 5-Star hotel, residential units, office spaces and a wide range of shopping and entertainment options."
      );
      setImg(slide1);
    } else if (value == "Royal Palmbay Wadduwa") {
      setHeading(value);
      setContent(
        "Our 5-star hotel in the heart of Colombo offers timeless elegance and grandeur. The perfect place to relish global cuisines after a business conference or a memorable rendezvous!"
      );
      setImg(slide2);
    } else if (value == "Royal Palmbay Negambo") {
      setHeading(value);
      setContent(
        "South Asia's first ever lean luxury hotel situated right at the heart of Colombo. The vibrant rooftop bar and serene infinity pool overlooking the Colombo Skyline provides every sense of relaxation and rejuvenation for the adventurous traveller!"
      );
      setImg(slide3);
    } else if (value == "Royal Palmbay Kandy") {
      setHeading(value);
      setContent(
        "Choose Cinnamon Bentota Beach for an opulent stay on Sri Lanka's gold coast. Nestled in the groves of coconut trees is a tastefully designed piece of architecture, an ultimate destination for art and culture enthusiasts!"
      );
      setImg(slide4);
    }
  };

  const experience = [
    {
      img: ex1,
      title: "Join Hilton Honors & Get Up to 3,000 Points",
    },
    {
      img: ex2,
      title: "Advance Purchase Discount – save up to 17%",
    },
    {
      img: ex3,
      title: "Multiply Your Points",
    },
    {
      img: ex4,
      title: "Free Bonus Points at new hotels",
    },
    {
      img: ex5,
      title: "Park & Stay",
    },
    {
      img: ex6,
      title: "Experience the Stay",
    },
  ];

  const booking = () => {
    alert("onclick working...!")
  }

  return (
    <div>
      <Header />
      <MDBCarousel showIndicators controls={false} fade>
        <MDBCarouselItem
          itemId={1}
          style={{ height: "80vh", position: "relative" }}
          className="carousal_item_sub"
        >
          <img src={slide1} className="carousal-img" alt="..." />
          <div className="carousel-caption">
            <h2>Royal Palmbay Wadduwa</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="search-room" onClick={booking}>
              Book a Room Now<SearchOutlinedIcon />
            </div>
          </div>
        </MDBCarouselItem>

        <MDBCarouselItem
          itemId={2}
          style={{ height: "80vh", position: "relative" }}
          className="carousal_item_sub"
        >
          <img src={slide2} className="carousal-img" alt="..." />
          <div className="carousel-caption">
            <h2>Royal Palmbay Wadduwa</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="search-room" onClick={booking}>
              Book a Room Now<SearchOutlinedIcon />
            </div>
          </div>
        </MDBCarouselItem>

        <MDBCarouselItem
          itemId={3}
          style={{ height: "80vh", position: "relative" }}
          className="carousal_item_sub"
        >
          <img src={slide3} className="carousal-img" alt="..." />
          <div className="carousel-caption">
            <h2>Royal Palmbay Wadduwa</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="search-room" onClick={booking}>
              Book a Room Now<SearchOutlinedIcon />
            </div>
          </div>
        </MDBCarouselItem>

        <MDBCarouselItem
          itemId={4}
          style={{ height: "80vh", position: "relative" }}
          className="carousal_item_sub"
        >
          <img src={slide4} className="carousal-img" alt="..." />
          <div className="carousel-caption">
            <h2>Royal Palmbay Wadduwa</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="search-room" onClick={booking}>
              Book a Room Now<SearchOutlinedIcon />
            </div>
          </div>
        </MDBCarouselItem>

        <div className="booking-container">
          <div className="booking1">
            <div className="date-tab">
              <input
                type="date"
                className="date-input"
                onChange={(e) =>
                  handleStartDateChange(new Date(e.target.value))
                }
              />
            </div>
            <div className="date-tab" id="date-count">
              <p>{count} days</p>
            </div>
            <div className="date-tab">
              <input
                type="date"
                className="date-input"
                onChange={(e) => handleEndDateChange(new Date(e.target.value))}
              />
            </div>
          </div>
          <div className="booking2" onClick={bookingRoom} ref={booking2Ref}>
            <PersonOutlineOutlinedIcon /> {room} Room , {adults} Adult ,{" "}
            {children} Children
          </div>
          <div className="booking3">
            <LocalOfferOutlinedIcon />{" "}
            <input
              type="text"
              className="input-code"
              placeholder="special code"
            />
          </div>
          <div className="booking4">Search</div>
        </div>
      </MDBCarousel>
      {openBooking && (
        <div className="booking" ref={bookingRoomRef}>
          <p>Manage room</p>
          <div className="room-container">
            <div className="name">Rooms : </div>
            <div className="room-plus">
              <RemoveIcon className="iconss" onClick={roomMinus} />
              {room}
              <AddIcon className="iconss" onClick={roomPlus} />
            </div>
          </div>
          <div className="room-container">
            <div className="name">Adults : </div>
            <div className="room-plus">
              <RemoveIcon className="iconss" onClick={adultsMinus} />
              {adults}
              <AddIcon className="iconss" onClick={adultsPlus} />
            </div>
          </div>
          <div className="room-container">
            <div className="name">Childrens : </div>
            <div className="room-plus">
              <RemoveIcon className="iconss" onClick={childrenMinus} />
              {children}
              <AddIcon className="iconss" onClick={childrenPlus} />
            </div>
          </div>
        </div>
      )}

      <div className="destination-container">
        <h2>Our Destinations</h2>
        <div className="dropdown-container">
          <div className={`select-menu ${isOpen ? "open" : ""}`}>
            <div className="select-btn" onClick={toggleDropdown}>
              <span className="sBtn-text">{heading}</span>
              <ExpandMoreOutlinedIcon />
            </div>
            <ul className="options">
              <li
                className="option"
                onClick={() => handleOptionClick("Royal Palmbay Life")}
              >
                <span className="options-text">Royal Palmbay Life</span>
              </li>
              <li
                className="option"
                onClick={() => handleOptionClick("Royal Palmbay Wadduwa")}
              >
                <span className="options-text">Royal Palmbay Wadduwa</span>
              </li>
              <li
                className="option"
                onClick={() => handleOptionClick("Royal Palmbay Negambo")}
              >
                <span className="options-text">Royal Palmbay Negambo</span>
              </li>
              <li
                className="option"
                onClick={() => handleOptionClick("Royal Palmbay Kandy")}
              >
                <span className="options-text">Royal Palmbay Kandy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="content-container">
          <div className="img-container">
            <img src={img} />
          </div>
          <div className="content-box">
            <div className="heading">{heading}</div>
            <div className="content">
              <h6>{content}</h6>
            </div>
            <div className="discover">Discover More</div>
          </div>
        </div>

        <div className="experience-container">
          <h2>Experience Something New </h2>
          <h6>
            Close to home or across the world, Hilton is there for you with
            memorable offers and experience. Check out what is new.
          </h6>
          <div className="details-container">
            <div class="row" style={{ paddingLeft: "2%" }}>
              {experience.map((data, index) => (
                <div
                  class="col-md-4"
                  style={{ marginBottom: "10px" }}
                  key={index}
                >
                  <div className="card">
                    <img src={data.img} />
                    <h4 className="card-title">{data.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="offer-container">
          <h2>Offers </h2>
          <div className="offer-boxes">
            <div class="row">
              <div class="col-md-4">
                <div className="offer-card">
                  <div className="member-offer">
                  <h6>Member Exclusive</h6>
                  </div>
                  <img src={offer1} />
                  <div className="offer-body">
                    <div className="offer-content-body">
                      <h6>Rooms & Suits</h6>
                      <h5>
                        Royal Palmbay Circle Exclusive Member Rate with
                        Breakfast
                      </h5>
                      <h6>
                        Exclusive Member Rate with Breakfast for Royal Palmbay
                        Circle member.
                      </h6>
                    </div>
                    <div className="offer-button-sector">
                      <div className="offer-btn-content">
                        <h3>From SGD 240.62 Average Per Night</h3>
                      </div>
                      <div className="offer-btn">View Details</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div className="offer-card">
                  <div className="member-offer">
                  <h6>Member Exclusive</h6>
                  </div>
                  <img src={offer2} />
                  <div className="offer-body">
                    <div className="offer-content-body">
                      <h6>Rooms & Suits</h6>
                      <h5>Royal Palmbay Circle Exclusive Member Rate</h5>
                      <h6>
                        Exclusive Member Rate for Royal Palmbay Circle member.
                      </h6>
                    </div>
                    <div className="offer-button-sector">
                      <div className="offer-btn-content">
                        <h3>From SGD 213.89 Average Per Night</h3>
                      </div>
                      <div className="offer-btn">View Details</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div className="offer-card">
                  <img src={offer3} />
                  <div className="offer-body">
                    <div className="offer-content-body">
                      <h6>Dining</h6>
                      <p>03 Jan 2024 - 31 Dec 2024</p>
                      <h5>Weekend Brunch at Central</h5>
                      <h6>
                        A global gastronomic journey awaits you with our Weekend
                        brunch at Central.
                      </h6>
                    </div>
                    <div className="offer-button-sector">
                      <div className="offer-btn-content"></div>
                      <div className="offer-btn">View Details</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="destinations">
          <h2>Destination </h2>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.770035310061!2d79.8459780748354!3d6.918073393081537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25940ed9b9633%3A0xb0658168859e3c0e!2sCinnamon%20Grand%20Colombo!5e0!3m2!1sen!2slk!4v1706856741630!5m2!1sen!2slk"
              width="100%"
              height="450"
              style={{ border: "0", marginTop: "50px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
