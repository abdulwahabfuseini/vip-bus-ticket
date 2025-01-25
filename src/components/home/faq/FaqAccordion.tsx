"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "./AccordionComponent";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number>(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="p-3 sm:px-10 max-w-6xl cursor-pointer mx-auto mb-10">
      <h1 className="text-5xl mb-4 uppercase font-semibold font-mono">Faqs</h1>
      <div>
        <Accordion open={open === 1} className="mb-2 rounded-lg">
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`bg-white shadow-md px-3 hover:bg-red-100 hover:rounded-md w-full transition-colors flex items-center justify-between ${
              open === 1 ? "text-blue-500 hover:!text-blue-700 font-bold" : "font-semibold"
            }`}
          >
            <div className="flex items-center justify-between  w-full sm:text-xl py-4 px-2 sm:px-6">
              <h1>How can I book a bus ticket online?</h1>
              <button>
                {open === 1 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
          </AccordionHeader>
          <AccordionBody
            className="px-3 text-lg font-normal bg-gray-100 py-2 sm:px-6 shadow-inner text-black"
            open={open === 1}
          >
            <ul>
              <li>
                To book a bus ticket online, visit our website or mobile app,
                enter your departure and destination locations, select your
                travel dates, choose your preferred bus and seat, and proceed
                with the payment.
              </li>
              <li>
                {" "}
                <strong>Example: </strong> Visit www.busbookingsite.com, select{" "}
                <strong>Accra</strong> as your departure city and{" "}
                <strong>Kumasi</strong> as your destination, choose the travel
                date, select a bus and seat, and make the payment using your
                preferred method.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 2} className="mb-2 rounded-lg">
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`bg-white shadow-md px-3 hover:bg-red-100 hover:rounded-md transition-colors flex items-center justify-between ${
              open === 2 ? "text-blue-500 hover:!text-blue-700 font-bold" : "font-semibold"
            }`}
          >
            <div className="flex py-4 px-2 sm:px-6 items-center justify-between w-full sm:text-xl">
              <h1>
                What payment methods are accepted for booking bus tickets?
              </h1>
              <button>
                {open === 2 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
          </AccordionHeader>
          <AccordionBody
            className="px-3 text-lg font-normal bg-gray-100 py-2 sm:px-6 shadow-inner text-black"
            open={open === 2}
          >
            <ul className="">
              <li>
                {" "}
                We accept various payment methods, including MTN Mobile Money,
                Vodafone Cash, AirtelTigo Cash, credit/debit cards, and net
                banking.
              </li>
              <li>
                <strong>Example:</strong> You can use MTN Mobile Money by
                selecting it as the payment option at checkout and follow the
                instructions to complete the transaction.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} className="mb-2 rounded-lg">
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`bg-white shadow-md px-3 hover:bg-red-100 hover:rounded-md w-full transition-colors flex items-center justify-between ${
              open === 3 ? "text-blue-500 hover:!text-blue-700 font-bold" : "font-semibold"
            }`}
          >
            <div className="flex py-4 px-2 sm:px-6 items-center justify-between w-full sm:text-xl">
              <h1>Can I cancel or change my bus ticket booking?</h1>
              <button>
                {open === 3 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
          </AccordionHeader>
          <AccordionBody
            className="px-3 text-lg font-normal bg-gray-100 py-2 sm:px-6 shadow-inner text-black"
            open={open === 3}
          >
            <ul>
              <li>
                Yes, you can cancel or modify your booking, subject to the bus
                operator&apos;s cancellation and modification policies. Please
                visit the <strong>My Bookings</strong> section on our website or
                app for more details.
              </li>
              <li>
                {" "}
                <strong>Example:</strong> If you need to cancel your trip from
                Accra to Kumasi, log in to your account, go to{" "}
                <strong>My Bookings</strong>, select the trip, and follow the
                prompts to cancel it. Check the cancellation policy for any
                applicable fees.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 4} className="mb-2 rounded-lg">
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className={`bg-white shadow-md px-3 hover:bg-red-100 hover:rounded-md transition-colors flex items-center justify-between ${
              open === 4 ? "text-blue-500 hover:!text-blue-700 font-bold" : "font-semibold"
            }`}
          >
            <div className="flex py-4 px-2 sm:px-6 items-center justify-between w-full sm:text-xl">
              <h1>Will I receive a confirmation after booking a ticket?</h1>
              <button>
                {open === 4 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
          </AccordionHeader>
          <AccordionBody
            className="px-3 text-lg font-normal bg-gray-100 py-2 sm:px-6 shadow-inner text-black"
            open={open === 4}
          >
            <ul>
              <li>
                {" "}
                Yes, after successful booking and payment, you will receive an
                email and SMS confirmation with your ticket details and booking
                reference number.
              </li>
              <li>
                {" "}
                <strong>Example:</strong> After booking your ticket from Accra
                to Kumasi, you will receive an email and SMS with details like
                the bus operator, departure time, and seat number.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} className="mb-2 rounded-lg">
          <AccordionHeader
            onClick={() => handleOpen(5)}
            className={`bg-white shadow-md px-3 hover:bg-red-100 hover:rounded-md w-full transition-colors flex items-center justify-between ${
              open === 5 ? "text-blue-500 hover:!text-blue-700 font-bold" : "font-semibold"
            }`}
          >
            <div className="flex py-4 px-2 sm:px-6 items-center justify-between w-full sm:text-xl">
              <h1>
                What should I do if I do not receive my booking confirmation?
              </h1>
              <button>
                {open === 5 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
          </AccordionHeader>
          <AccordionBody
            className="px-3 text-lg font-normal bg-gray-100 py-2 sm:px-6 shadow-inner text-black"
            open={open === 5}
          >
            <ul>
              <li>
                If you do not receive a confirmation email or SMS, please check
                your spam/junk folder first. If it&apos;s not there, contact our
                customer support team with your booking details.
              </li>
              <li>
                {" "}
                <strong>Example:</strong> If you haven&apos;t received your
                confirmation within 10 minutes of booking, check your
                email&apos;s spam folder. If it&apos;s not there, call our
                support team at 123-456-7890 for assistance.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 6} className="mb-2 rounded-lg">
          <AccordionHeader
            onClick={() => handleOpen(6)}
            className={`bg-white shadow-md px-3 hover:bg-red-100 hover:rounded-md transition-colors flex items-center justify-between ${
              open === 6 ? "text-blue-500 hover:!text-blue-700 font-bold" : "font-semibold"
            }`}
          >
            <div className="flex py-4 px-2 sm:px-6 items-center justify-between w-full sm:text-xl">
              <h1>Is it necessary to print the ticket?</h1>
              <button>
                {open === 6 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
          </AccordionHeader>
          <AccordionBody
            className="px-3 text-lg font-normal bg-gray-100 py-2 sm:px-6 shadow-inner text-black"
            open={open === 6}
          >
            <ul>
              <li>
                {" "}
                We accept both electronic and printed tickets, so printing is
                not mandatory. You can show the e-ticket or the booking
                confirmation SMS on your mobile device at the time of boarding.
              </li>
              <li>
                {" "}
                <strong>Example:</strong> When boarding the bus in Accra, simply
                show the e-ticket or confirmation SMS on your phone to the bus
                conductor.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 7} className="mb-2 rounded-lg">
          <AccordionHeader
            onClick={() => handleOpen(7)}
            className={`bg-white shadow-md px-3 hover:bg-red-100 hover:rounded-md w-full transition-colors flex items-center justify-between ${
              open === 7 ? "text-blue-500 hover:!text-blue-700 font-bold" : "font-semibold"
            }`}
          >
            <div className="flex py-4 px-2 sm:px-6 items-center justify-between w-full sm:text-xl">
              <h1>What are the luggage policies for bus travel?</h1>
              <button>
                {open === 7 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
          </AccordionHeader>
          <AccordionBody
            className="px-3 text-lg font-normal bg-gray-100 py-2 sm:px-6 shadow-inner text-black"
            open={open === 7}
          >
            <ul>
              <li>
                Luggage policies vary by bus operator. Generally, each passenger
                is allowed to carry one piece of hand luggage and one piece of
                checked luggage. Additional baggage may incur extra charges.
              </li>
              <li>
                {" "}
                <strong> Example:</strong> If traveling from Accra to Kumasi,
                you may carry one small backpack as hand luggage and one
                suitcase as checked luggage. If you have extra baggage, you
                might need to pay an additional fee.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 8} className="mb-2 rounded-lg">
          <AccordionHeader
            onClick={() => handleOpen(8)}
            className={`bg-white shadow-md px-3 hover:bg-red-100 hover:rounded-md transition-colors flex items-center justify-between ${
              open === 8 ? "text-blue-500 hover:!text-blue-700 font-bold" : "font-semibold"
            }`}
          >
            <div className="flex py-4 px-2 sm:px-6 items-center justify-between w-full sm:text-xl">
              <h1>
                How early should I arrive at the bus terminal before departure?
              </h1>
              <button>
                {open === 8 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
          </AccordionHeader>
          <AccordionBody
            className="px-3 text-lg font-normal bg-gray-100 py-2 sm:px-6 shadow-inner text-black"
            open={open === 8}
          >
            <ul>
              <li>
                {" "}
                It is recommended to arrive at the bus terminal at least 30
                minutes before the scheduled departure time to ensure a smooth
                boarding process.
              </li>
              <li>
                {" "}
                <strong>Example:</strong> For a bus departing at 9:00 AM from
                Accra, arrive at the terminal by 8:30 AM to complete check-in
                and boarding procedures comfortably.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 9} className="mb-2 rounded-lg">
          <AccordionHeader
            onClick={() => handleOpen(9)}
            className={`bg-white shadow-md px-3 hover:bg-red-100 hover:rounded-md w-full transition-colors flex items-center justify-between ${
              open === 9 ? "text-blue-500 hover:!text-blue-700 font-bold" : "font-semibold"
            }`}
          >
            <div className="flex py-4 px-2 sm:px-6 items-center justify-between w-full sm:text-xl">
              <h1>Are there discounts available for group bookings?</h1>
              <button>
                {open === 9 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
          </AccordionHeader>
          <AccordionBody
            className="px-3 text-lg font-normal bg-gray-100 py-2 sm:px-6 shadow-inner text-black"
            open={open === 9}
          >
            <ul>
              <li>
                {" "}
                Yes, we offer discounts for group bookings. The discount amount
                may vary depending on the number of tickets booked and the bus
                operator&apos;s policies.
              </li>
              <li>
                <strong>Example:</strong> If booking 10 tickets for a group
                traveling from Accra to Kumasi, you might be eligible for a 10%
                discount. Check the website or contact customer support for
                specific group booking discounts.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 10} className="mb-2 rounded-lg">
          <AccordionHeader
            onClick={() => handleOpen(10)}
            className={`bg-white shadow-md px-3 hover:bg-red-100 hover:rounded-md transition-colors flex items-center justify-between ${
              open === 10 ? "text-blue-500 hover:!text-blue-700 font-bold" : "font-semibold"
            }`}
          >
            <div className="flex py-4 px-2 sm:px-6 items-center justify-between w-full sm:text-xl">
              <h1>What amenities are provided on the bus?</h1>
              <button>
                {open === 10 ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
          </AccordionHeader>
          <AccordionBody
            className="px-3 text-lg font-normal bg-gray-100 py-2 sm:px-6 shadow-inner text-black"
            open={open === 10}
          >
            <ul>
              <li>
                {" "}
                Bus amenities can vary by operator and bus type. Common
                amenities include air conditioning, Wi-Fi, reclining seats, and
                onboard entertainment.
              </li>
              <li>
                {" "}
                <strong>Example:</strong> For a luxury bus traveling from Accra
                to Kumasi, you can expect amenities like air conditioning, free
                Wi-Fi, and personal entertainment screens at each seat. Check
                the bus details on our website for specific amenities.
              </li>
            </ul>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}
