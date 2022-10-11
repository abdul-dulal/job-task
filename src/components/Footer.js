import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#040335]">
      <div className="mt-36 lg:px-28 md:px-22 px-12 ">
        <h1 className="md:text-5xl text-3xl  font-bold text-center text-white pt-16">
          We are here to help <br />
          you grow your business
        </h1>

        <button className="uppercase block mx-auto my-10 bg-white text-[#0F0EC9] w-56 h-12 rounded-full text-xl font-bold">
          Get Started Now
        </button>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <footer className="lg:px-28 md:px-22 px-12">
        <div className="p-4  sm:p-6">
          <div className="md:flex gap-4 md:justify-between">
            <div className="mb-6 md:mb-0 hidden sm:flex">
              <div>
                <h1 className="text-xl font-bold text-white uppercase">
                  Saasify
                </h1>
                <p className="text-sm  text-white">
                  Data visualization, and expense <br /> management for your
                  business.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Product
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Digital Invoice
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Insights
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Reimbursements
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Virtual Assistant
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Artificial Intelligence
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Company
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Newsletters
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Our Partners
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Career
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Blog
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Pricing
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      FAQ
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Events
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Ebook & Guide
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow Us
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Linkeding
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Twiter
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Instagram
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      Fackbook
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="hover:underline">
                      You Tube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <hr className="my-9 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="text-center pb-9">
        <span className="text-base text-gray-500 sm:text-center dark:text-gray-400 ">
          Copyright &copy; Kartik Bansal 2022. All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
