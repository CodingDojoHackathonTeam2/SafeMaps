import React, { useRef, useEffect, useState } from "react";

import Geo from "../components/icons/Geo";
import Check from "../components/icons/Check";
import Social from "../assets/icons/Connection.png";
import Hiring from "../components/icons/Hiring";
import Bed from "../components/icons/Bed";
import Contact from "../components/icons/Contact";
import People from "../components/icons/People";
import Donations from "../components/Donations";
import Footer from "../components/Footer";
import Donation from "../components/icons/Donation";
import Paypal from "./Paypal";
import Bank from "../components/icons/Bank";
import Faq from "../components/icons/Faq";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  let navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);

  return (
    <>
      <div className="mx-auto h-screen bg-yellow-300">
        <div className="container mx-auto flex justify-center pt-52">
          <p className="text-center text-6xl font-semibold">
            Safe{" "}
            <span className="font-bold text-cyan-700">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Places ❤")
                    .pauseFor(3000)
                    .deleteAll()
                    .typeString("Homes ❤")
                    .pauseFor(3000)
                    .deleteAll()
                    .typeString("Future ❤")
                    .pauseFor(3000)
                    .deleteAll()
                    .typeString("Places ❤")
                    .pauseFor(3000)
                    .deleteAll()
                    .typeString("Homes ❤")
                    .pauseFor(3000)
                    .deleteAll()
                    .typeString("Future ❤")
                    .pauseFor(3000)
                    .deleteAll()
                    .typeString("Homes ❤")
                    .start();
                }}
              />
            </span>
            {/* <span className="text-center text-5xl text-blue-900 font-black">
              HOMES
            </span> */}
            for the ukranian people
          </p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-center content-around gap-8 px-8 md:px-0">
          <button
            class="bg-red-500 hover:bg-blue-700 text-white font-bold text-md py-4 px-8 rounded-full"
            onClick={() => navigate("/map")}
          >
            I'm looking for help
          </button>

          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full"
            onClick={() => navigate("/login")}
          >
            I want to help
          </button>
        </div>
      </div>

      <div data-aos="fade-up" className="container mx-auto pt-24 pb-24 px-8">
        <h1 className="text-center text-4xl md:text-6xl pb-6">
          Your help is very important!
        </h1>

        <p className="text-center text-xl md:w-[48rem] mx-auto">
          <span className="text-blue-500">
            <span className="text-yellow-400"></span>Shelter{" "}
          </span>
          will fund temporary housing for up to 100,000 people fleeing
          <span> Ukraine ❤</span>, regardless of their nationality, racial or
          ethnic origin, or how they identify themselves.
        </p>

        <p className="text-center text-xl md:w-[48rem] mx-auto mt-2">
          You can offer your space for this cause for free through
          <span className="text-blue-500">
            {" "}
            <span className="text-yellow-400">i</span>Shelter
          </span>
          , or make a donation that will help finance the stays of those who
          need it most.
        </p>
      </div>

      <section className="mx-auto flex justify-center content-evenly">
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="flex gap-24 flex-col md:flex-row py-12"
        >
          <div className="flex-initial w-64">
            <p className="text-center text-4xl pt-24">
              Welcome to <span className="text-yellow-400">i</span>
              <span className="text-blue-500">Shelter</span>, join us and find a
              host or become one.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="500"
            className="flex-initial w-64 gap-y-24"
          >
            <Geo />
          </div>
        </div>
      </section>

      <section
        id="why"
        className="mx-auto flex justify-center content-evenly pt-20 bg-slate-100 "
      >
        <div className="flex gap-24 flex-col md:flex-row">
          <div data-aos="fade-right" className="flex-initial w-64">
            <Hiring />
          </div>

          <div className="flex-initial w-64 h-64 gap-y-24 ">
            <p
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-center text-4xl"
            >
              <span className="text-yellow-400">Why</span>
              <span className="text-blue-500"> Help</span>{" "}
            </p>
            <br></br>
            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-center text-4xl"
            >
              Become a host
            </h1>
            <br></br>
            <h2
              data-aos="fade-right"
              data-aos-duration="2000"
              className="text-center text-2xl"
            >
              How can I become a host?
            </h2>
          </div>
        </div>
      </section>

      <section className="mx-auto flex justify-center pt-20 pb-20 bg-slate-100">
        <div className="inline-flex gap-x-10 flex-col md:flex-row gap-8">
          <div className="flex-1">
            <div
              data-aos="fade-right"
              class="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <div class="px-6 py-4">
                <Bed />
                <div class="font-bold text-xl mb-2 inline-flex gap-2 mt-3">
                  {" "}
                  <Check height={24} /> Room and Services{" "}
                </div>

                <p class="text-gray-700 text-base">
                  Make sure your guests have a comfortable bed and basic
                  amenities during their stay, which can last from a few days to
                  several weeks.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex-1">
              <div
                data-aos="fade-up"
                class="max-w-sm rounded overflow-hidden shadow-lg"
              >
                <div class="px-6 py-4 ">
                  <Contact />
                  <p class="font-bold text-xl mb-2 inline-flex gap-2 mt-3">
                    <Check height={24} />
                    We will be part of the process
                  </p>

                  <p class="text-gray-700 text-base">
                    <span className="text-yellow-400">i</span>
                    <span className="text-blue-500">Shelter</span> partners with
                    nonprofit organizations that check refugee guests for
                    eligibility and offer help before, during, and after their
                    stay.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex-1">
              <div
                data-aos="fade-left"
                class="max-w-sm rounded overflow-hidden shadow-lg"
              >
                <div class="px-6 py-4">
                  <People />
                  <div class="font-bold text-xl mb-2 inline-flex gap-2 mt-3">
                    {" "}
                    <Check height={24} />
                    Guest Arrival
                  </div>
                  <p class="text-gray-700 text-base ">
                    Receive your guest with a good smile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex justify-center content-evenly pt-20">
        <div className="flex gap-24 flex-col md:flex-row">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="flex-initial w-64"
          >
            <Donation height={200} />
          </div>

          <div className="flex-initial w-64 h-64 gap-y-24 mt-3">
            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-center md:text-left text-4xl"
            >
              Want to make a donation?
            </h1>
            <br></br>
            <h2
              data-aos="fade-right"
              data-aos-duration="2000"
              className="text-center md:text-left text-2xl"
            >
              How can I become a host?
            </h2>
          </div>
        </div>
      </section>

      <section className="mx-auto flex justify-center pt-20 border-b-0 pb-5">
        <div className="inline-flex flex-col md:flex-row gap-8">
          <div data-aos="fade-right" className="flex-1">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <Bank />
                <div class="font-bold text-xl mb-2 inline-flex gap-2 mt-3">
                  {" "}
                  <Check height={24} /> Where does the money go?{" "}
                </div>

                <p class="text-gray-700 text-base">
                  Every penny will be used to find and offer temporary
                  accommodation to people in need.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex-1">
              <div
                data-aos="fade-up"
                class="max-w-sm rounded overflow-hidden shadow-lg"
              >
                <div class="px-6 py-4">
                  <Faq />
                  <p class="font-bold text-xl mb-2 inline-flex gap-2 mt-3">
                    <Check height={24} />
                    Do we charge the refugees?
                  </p>

                  <p class="text-gray-700 text-base">
                    No, the program stays are completely free for guests.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex-1">
              <div
                data-aos="fade-left"
                class="max-w-sm rounded overflow-hidden shadow-lg"
              >
                <div class="px-6 py-4">
                  <Contact />
                  <div class="font-bold text-xl mb-2 inline-flex gap-2 mt-3">
                    {" "}
                    <Check height={24} />
                    Will you have to pay taxes for hosting?
                  </div>
                  <p class="text-gray-700 text-base">
                    You will be able to deduct the donations you make when the
                    local legislation in your area allows it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white-400 bg-opacity-30 mb-28">
        <div className="max-w-3x1 mx-auto">
          <div className="text-center py-3 ">
            <button
              onClick={() => setShowModal(true)}
              className="bg-yellow-400 text-red-600 font-extrabold px-3 py-2 rounded hover:scale-95 transition text-xl"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
      <Paypal onClose={handleOnClose} visible={showModal} />
    </>
  );
};

export default Landing;
