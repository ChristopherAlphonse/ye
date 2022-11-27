import { FunctionComponent } from "react";

const currentYear = new Date().getFullYear();

const Footer: FunctionComponent = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 ">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {currentYear}{" "}
        <a href="/christopheralphonse.com" className="hover:underline" /> . All
        Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="mr-4 md:mr-6">
            Made by{" "}
            <span className="hover:text-blue-600 ">Christopher Alphonse</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:mellisaalphonse11@gmail.com"
            className="hover:underline"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
