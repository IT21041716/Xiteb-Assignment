import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import logo1 from "../assets/images/logo transparent.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import _debounce from "lodash/debounce";
import _throttle from "lodash/throttle";
import MenuIcon from "@mui/icons-material/Menu";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CloseIcon from "@mui/icons-material/Close";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const debouncedSetScrolling = _debounce(() => {
    setScrolling(false);
  }, 1000);
  useEffect(() => {
    const handleScroll = _throttle(() => {
      setScrolling(true);
      debouncedSetScrolling();
    }, 200);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [debouncedSetScrolling]);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="main-header-container">
        <div className="detailbar-container">
          <div className="detailbar-inner">
            <div className="logo-container">
              <img src={logo} className="logo" />
            </div>
            <div className="option-container">
              <ul className="option-ul">
                <li className="li-style">
                  <PersonOutlineOutlinedIcon
                    style={{
                      fontSize: "17px",
                      color: "#333",
                      marginRight: "5px",
                    }}
                  />{" "}
                  Sign In
                </li>
                <li className="li-style">Join Now</li>
                <li className="li-style">Find Reservations</li>
                <li className="li-style">
                  <LanguageOutlinedIcon
                    style={{
                      fontSize: "17px",
                      color: "#333",
                      marginRight: "5px",
                    }}
                  />{" "}
                  English
                </li>
                <li style={{ alignItems: "center", display: "flex" }}>
                  <SmartphoneOutlinedIcon
                    style={{
                      fontSize: "17px",
                      color: "#333",
                      marginRight: "0",
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-container">
          <div className="navbar-inner">
            <div className="nav-container">
              <ul className="navbar-ul">
                <li className="navbar-li-style">
                  about <KeyboardArrowDownOutlinedIcon />
                  {scrolling === false ? (
                    <div className="submanu-container">
                      <div className="inner-sub">
                        <div className="submanu">
                          <h3>About The Hotel</h3>
                          <p>Overview</p>
                          <p>Explore Colombo</p>
                          <p>Services & Facilities</p>
                          <p>Map & Directions</p>
                        </div>
                        <div className="submanu"></div>
                        <div className="submanu"></div>
                        <div className="submanu"></div>
                      </div>
                    </div>
                  ) : null}
                </li>
                <li className="navbar-li-style">
                  room & suites <KeyboardArrowDownOutlinedIcon />
                  {scrolling === false ? (
                    <div className="submanu-container">
                      <div className="inner-sub" id="inner-sub">
                        <div className="submanu">
                          <h3>Rooms</h3>
                          <p>Deluxe Lake View</p>
                          <p>Deluxe Ocean View</p>
                          <p>Premier Balcony</p>
                          <p>Premier Ocean View</p>
                        </div>
                        <div className="submanu">
                          <h3>Horizon Club</h3>
                          <p>Horizon Club Lake View</p>
                          <p>Horizon Club Ocean View</p>
                        </div>
                        <div className="submanu">
                          <h3>Suites</h3>
                          <p>Executive Suites</p>
                          <p>Specialty Suites</p>
                          <p>Shangri-La Suite</p>
                        </div>
                        <div className="submanu">
                          <h3>Connecting Rooms</h3>
                          <p>Executive Suite & Premier Ocean Room Connecting</p>
                          <p>Two Deluxe Lake View Rooms Connecting</p>
                        </div>
                      </div>
                      <div className="bottom-div">
                        <p className="bottom-p">ROOMS & SUITES OVERVIEW</p>
                      </div>
                    </div>
                  ) : null}
                </li>
                <li className="navbar-li-style">
                  dining <KeyboardArrowDownOutlinedIcon />
                  {scrolling === false ? (
                    <div className="submanu-container">
                      <div className="inner-sub" id="inner-sub">
                        <div className="submanu">
                          <h3>Restaurants</h3>
                          <p>
                            Cake Temptations by Shangri-La <br />
                            Colombo
                          </p>
                          <p>Shang Palace</p>
                          <p>Capital Bar & Grill</p>
                          <p>Tiki Bar</p>
                          <p>Central</p>
                          <p>Central café</p>
                        </div>
                        <div className="submanu">
                          <h3>Bars & Lounges</h3>
                          <p>Sapphyr Lounge</p>
                          <p>Capital Bar & Grill</p>
                          <p>Pool Bar</p>
                          <p>Tiki Bar</p>
                        </div>
                        <div className="submanu"></div>
                        <div className="submanu"></div>
                      </div>
                      <div className="bottom-div">
                        <p className="bottom-p">DINING OVERVIEW</p>
                      </div>
                    </div>
                  ) : null}
                </li>
                <li className="navbar-li-style">
                  experience <KeyboardArrowDownOutlinedIcon />
                  {scrolling === false ? (
                    <div className="submanu-container">
                      <div className="inner-sub">
                        <div className="submanu">
                          <h3>For Kids</h3>
                          <p>Overview</p>
                          <p>Adventure Zonee</p>
                          <p>Celebrations</p>
                        </div>
                        <div className="submanu">
                          <h3>Health & Leisure</h3>
                          <p>Overview</p>
                          <p>Health Club</p>
                          <p>Chi, The Spa</p>
                        </div>
                        <div className="submanu"></div>
                        <div className="submanu"></div>
                      </div>
                    </div>
                  ) : null}
                </li>
                <li className="navbar-li-style">
                  event <KeyboardArrowDownOutlinedIcon />
                  {scrolling === false ? (
                    <div className="submanu-container">
                      <div className="inner-sub">
                        <div className="submanu">
                          <h3>Meetings & Events</h3>
                          <p>Overview</p>
                          <p>Experience It</p>
                          <p>Coworking Space</p>
                          <p>Outside Catering</p>
                          <p>Request For Proposal</p>
                          <p>Book Meeting Room Online</p>
                        </div>
                        <div className="submanu">
                          <h3>Wedding and Celebrations</h3>
                          <p>Overview</p>
                          <p>Wedding Planning</p>
                          <p>Weddings By Shangri-La</p>
                          <p>Request for Proposal</p>
                        </div>
                        <div className="submanu"></div>
                        <div className="submanu"></div>
                      </div>
                    </div>
                  ) : null}
                </li>
                <li className="navbar-li-style">gallery</li>
                <li className="navbar-li-style">offers</li>
                <li className="navbar-li-style">
                  more <KeyboardArrowDownOutlinedIcon />
                  {scrolling === false ? (
                    <div className="submanu-container">
                      <div className="inner-sub">
                        <div className="submanu">
                          <h3>Apartments</h3>
                          <p>Learn More</p>
                        </div>
                        <div className="submanu"></div>
                        <div className="submanu"></div>
                        <div className="submanu"></div>
                      </div>
                    </div>
                  ) : null}
                </li>
              </ul>
            </div>
            <button className="find-button">FIND A HOTEL</button>
          </div>
        </div>
      </div>
      <div className="mobile-header">
        {menuOpen === false ? (
          <div className="main-header">
            <div className="logo-div">
              <img src={logo1} />
            </div>
            <div className="action-div">
              <PersonOutlineOutlinedIcon className="action-icons" />
              <ArticleOutlinedIcon className="action-icons" />
              <MenuIcon className="action-icons" onClick={handleClick} />
            </div>
          </div>
        ) : (
          <div className="main-header2">
            <div className="head">
              <div className="logo-div">
                <img src={logo1} />
              </div>
              <div className="action-div" id="icon-action">
                <CloseIcon className="action-icons" onClick={handleClick} />
              </div>
            </div>
            <div className="manu-body">
              <div className="inner-sub">
                <h3>Main Menu</h3>
                <ul className="navbar-main-ul">
                  <li className="navbar-main-li">
                    about <KeyboardArrowDownOutlinedIcon style={{float: 'right'}}/>
                    <ul>
                      <li className="navbar-main-sub">
                        About The Hotel <KeyboardArrowDownOutlinedIcon style={{float: 'right'}}/>
                        <ul className="navbar-main-sub-navigations">
                          <li className="navbar-main-sub-navigations-li">Explore Colombo</li>
                          <li className="navbar-main-sub-navigations-li">Services & Facilities</li>
                          <li className="navbar-main-sub-navigations-li">Map & Directions</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="navbar-main-li">room & suites</li>
                  <li className="navbar-main-li">dining</li>
                  <li className="navbar-main-li">
                    experience <KeyboardArrowDownOutlinedIcon style={{float: 'right'}}/>
                    <ul>
                      <li className="navbar-main-sub">
                        For Kids <KeyboardArrowDownOutlinedIcon style={{float: 'right'}}/>
                        <ul className="navbar-main-sub-navigations">
                          <li className="navbar-main-sub-navigations-li">Overview</li>
                          <li className="navbar-main-sub-navigations-li">Adventure Zonee</li>
                          <li className="navbar-main-sub-navigations-li">Celebrations</li>
                        </ul>
                      </li>
                      <li className="navbar-main-sub">
                        Health & Leisure <KeyboardArrowDownOutlinedIcon style={{float: 'right'}}/>
                        <ul className="navbar-main-sub-navigations">
                          <li className="navbar-main-sub-navigations-li">Overview</li>
                          <li className="navbar-main-sub-navigations-li">Health Club</li>
                          <li className="navbar-main-sub-navigations-li">Chi, The Spa</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="navbar-main-li">
                    event <KeyboardArrowDownOutlinedIcon style={{float: 'right'}}/>
                    <ul>
                      <li className="navbar-main-sub">
                        Meetings & Events <KeyboardArrowDownOutlinedIcon style={{float: 'right'}}/>
                        <ul className="navbar-main-sub-navigations">
                          <li className="navbar-main-sub-navigations-li">Overview</li>
                          <li className="navbar-main-sub-navigations-li">Experience It</li>
                          <li className="navbar-main-sub-navigations-li">Coworking Space</li>
                          <li className="navbar-main-sub-navigations-li">Outside Catering</li>
                          <li className="navbar-main-sub-navigations-li">Request For Proposal</li>
                          <li className="navbar-main-sub-navigations-li">Book Meeting Room Online</li>
                        </ul>
                      </li>
                      <li className="navbar-main-sub">
                        Wedding and Celebrations <KeyboardArrowDownOutlinedIcon style={{float: 'right'}}/>
                        <ul className="navbar-main-sub-navigations">
                          <li className="navbar-main-sub-navigations-li">Overview</li>
                          <li className="navbar-main-sub-navigations-li">Wedding Planning</li>
                          <li className="navbar-main-sub-navigations-li">Weddings By Shangri-La</li>
                          <li className="navbar-main-sub-navigations-li">Request For Proposal</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="navbar-main-li">more</li>
                </ul>
              </div>
              <hr className="hr-line"/>
              <div className="action-container">
                <div className="action-inne">
                  <PersonOutlineOutlinedIcon style={{marginRight: "10px"}}/>
                  Sign In
                </div>
                <div className="action-inne">
                  <PersonAddAltOutlinedIcon style={{marginRight: "10px"}}/>
                  Join Now
                </div>
                <div className="action-inne">
                  <ArticleOutlinedIcon style={{marginRight: "10px"}}/>
                  Find Reservations
                </div>
              </div>
              <hr className="hr-line"/>
              <div className="last-elemnt">
                <h4>Language</h4>
                <h5>English</h5>
              </div>
              <div className="last-elemnt">
                <h4>Currency</h4>
                <h5>SGD</h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
