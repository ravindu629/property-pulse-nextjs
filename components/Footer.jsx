import Image from "next/image";
import logo from "@/assets/images/logo.png"; // Make sure this path is correct

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // We remove 'mt-24' here as proper layout will push it to the bottom.
    // Use 'bg-gray-800' for a sleek dark background.
    // 'text-white' for overall text visibility on dark background.
    // 'py-6' for a bit more vertical padding.
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0">
          {/* Increased logo height for better visual presence */}
          <Image src={logo} alt="PropertyPulse Logo" className="h-10 w-auto" />
        </div>

        {/* Navigation Links Section */}
        <div className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
          {/* Adjusted spacing and added hover effects for modern feel */}
          <ul className="flex space-x-6 text-sm">
            <li>
              <a
                href="/properties"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Properties
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </li>
            {/* Add more links here if needed, e.g., About Us, Contact */}
          </ul>
        </div>

        {/* Copyright Section */}
        <div>
          {/* Used 'text-gray-400' for a subtle, modern copyright text */}
          <p className="text-sm text-gray-400 mt-2 md:mt-0">
            &copy; {currentYear} PropertyPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
