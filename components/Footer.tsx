import { FunctionComponent } from "react";

const currentYear = new Date().getFullYear();

const Footer: FunctionComponent = () => {
  return (
    <footer className="flex flex-col items-center justify-between p-6 text-white  sm:flex-row">
      <div className="flex-1 flex">
        <span>Contact US</span>
      </div>

      <p className="text-sm text-gray-600 ">
        © Copyright {currentYear}. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
