// import React from 'react'
import "./Home.css";
import RedcliffeIcon from "../src/assets/redcliffe.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import CartIcon from "../src/assets/cart-icon3.png";
import ProfileIcon from "../src/assets/profile-icon.png";
import HamburgerIcon from "../src/assets/hamburger-icon.png";
import CalenderIcon from "../src/assets/calender-icon.png";
import BookingBag from "../src/assets/booking-bag.png";
import CallingIcon from "../src/assets/calling-icon.png";
import UploadIcon from "../src/assets/Upload-new.png";
import HelthPackage from "../src/assets/health-8.png";
import BackGroundImage from "../src/assets/background-red.png";
import Footer from "./Footer";
import FrequentlyBook from './Booked.jsx';

export const Home = () => {
  return (
    <>
      <header style={{ display: "content" }}>
        <div className="header__container">
          <div className="header__desktop">
            <div className="header__location">
              <div className="header__icon">
                <a href="/">
                  <img src={RedcliffeIcon} alt="" width="104" height="41"/>
                </a>
              </div>
              <div className="city_desktop">
                <p style={{marginTop:"14px"}}>Delhi</p>
                <RiArrowDropDownLine style={{ fontSize: "26px" }} />
              </div>
            </div>
            <div className="header__desktop__option">
              <div className="header__desktop__cart_option">
                <div className="cartText">
                  <span className="header__desktop__options__icon__text">
                    Cart
                  </span>
                </div>
                <img src={CartIcon} alt="" className="cartIcon" />
              </div>
              <div className="header__desktop__cart_option">
                <div className="cartText">
                  <span className="header__desktop__options__icon__text">
                    Profile
                  </span>
                </div>
                <img src={ProfileIcon} alt="" className="cartIcon" />
              </div>
            </div>
          </div>
          <div className="header__desktop__container">
            <div className="header__desktop__subMenu">
              <div className="menu">
                <img src={HamburgerIcon} alt="" className="cartIcon" />
                <span className="header__desktop__options__icon__text">
                  Menu
                </span>
              </div>
              <div className="header__desktop__subMenu__bookings">
                <div className="header__desktop__subMenu__bookings__option">
                  <img src={CalenderIcon} alt="" className="cartIcon" />
                  <span
                    className="header__desktop__options__icon__text"
                    style={{ color: "red" }}
                  >
                    Book a Test
                  </span>
                </div>
                <div className="header__desktop__subMenu__bookings__option">
                  <img src={BookingBag} alt="" className="cartIcon" />
                  <span className="header__desktop__options__icon__text">
                    Bookings & Reports
                  </span>
                </div>
              </div>
              <div className="header__desktop__subMenu__call">
                <img src={CallingIcon} alt="" className="cartIcon" />
                <span className="header__desktop__options__icon__text">
                  8887672162
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="TopSection_banner" >
        <img
          src={BackGroundImage}
          alt=""
          style={{ width: "100%", position: "absolute",marginTop:"125px",height:"345px" }}
        />
        <div className="TopSection_banner__container">
          <div className="TopSection_banner__container__inputsContainer">
            <div className="TopSection_banner__container__inputsContainer__inputs">
              <div className="TopSection_banner__input--desktop">
                <h1 style={{ position: "relative", color: "#fff" }}>
                  Looking for a test ?
                </h1>
                <div className="DesktopSearch_search">
                  <div className="DesktopSearch_search__inputBox">
                    <img src={CallingIcon} alt="" className="cartIcon" />
                    <form action="" style={{ width: "100%" }}>
                      <input
                        type="text"
                        placeholder="Search Tests"
                        className="inputDiv"
                      />
                    </form>
                    <div className="DesktopSearch_search__inputBox__crossIconContainer">
                      <img src={CallingIcon} alt="" className="cartIcon" />
                    </div>
                  </div>
                </div>
                <div className="TopSection_banner__options">
                  <div className="TopSection_banner__upload__option">
                    <div className="TopSection_banner__option__icon">
                      <img src={UploadIcon} alt="" className="cartIcon" />
                    </div>
                    <p>Upload Prescription</p>
                  </div>
                  <div className="TopSection_banner__upload__option">
                    <div className="TopSection_banner__option__icon">
                      <img src={HelthPackage} alt="" className="cartIcon" />
                    </div>
                    <p>Select Health Package</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section > */}
        <FrequentlyBook />
      {/* </section> */}
      <section style={{marginTop:"80px"}}>
        <Footer />
      </section>
    </>
  );
};
