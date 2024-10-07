import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { FaBars, FaGlobe } from "react-icons/fa";

export const TopBar: React.FC = () => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isPageOptionsVisible, setIsPageOptionsVisible] = useState(false);
  const [isLanguageOptionsVisible, setIsLanguageOptionsVisible] =
    useState(false);
  const pageOptionsRef = useRef<HTMLDivElement>(null);
  const languageOptionsRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (selectedValue: string) => {
    setIsPageOptionsVisible(false); // Close the options after selection

    if (selectedValue !== "home") {
      router.push(`/${selectedValue}`);
    } else {
      router.push("/");
    }
  };

  const handleLanguageChange = (selectedValue: string) => {
    setSelectedLanguage(selectedValue);
    setIsLanguageOptionsVisible(false); // Close the options after selection

    // There is some issues with this lines
    switch (selectedLanguage) {
      case "en":
        console.log("English selected");
        break;
      case "zh-cn":
        console.log("Chinese (Simplified) selected");
        break;
      default:
        console.error("Invalid language selection");
        break;
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pageOptionsRef.current &&
        !pageOptionsRef.current.contains(event.target as Node)
      ) {
        setIsPageOptionsVisible(false);
      }
      if (
        languageOptionsRef.current &&
        !languageOptionsRef.current.contains(event.target as Node)
      ) {
        setIsLanguageOptionsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pageOptionsRef, languageOptionsRef]);

  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white relative">
      <div className="relative">
        <button
          onClick={() => setIsPageOptionsVisible(!isPageOptionsVisible)}
          className="flex items-center"
        >
          <FaBars className="mr-2" /> {/* Hamburger icon */}
        </button>
        {isPageOptionsVisible && (
          <div
            ref={pageOptionsRef}
            className="absolute bg-white text-black z-10 rounded-lg shadow-lg mt-1"
          >
            <ul className="p-2">
              <li
                onClick={() => handlePageChange("home")}
                className="hover:bg-gray-300 p-2 cursor-pointer rounded-md"
              >
                Home
              </li>
              <li
                onClick={() => handlePageChange("items")}
                className="hover:bg-gray-300 p-2 cursor-pointer rounded-md"
              >
                Items
              </li>
              <li
                onClick={() => handlePageChange("recipes")}
                className="hover:bg-gray-300 p-2 cursor-pointer rounded-md"
              >
                Recipes
              </li>
              <li
                onClick={() => handlePageChange("machines")}
                className="hover:bg-gray-300 p-2 cursor-pointer rounded-md"
              >
                Machines
              </li>
              {/* Add more options here */}
            </ul>
          </div>
        )}
      </div>

      <h1 className="text-lg font-bold">Satisfactory Recipe Calculator</h1>

      <div className="relative">
        <button
          onClick={() => setIsLanguageOptionsVisible(!isLanguageOptionsVisible)}
          className="flex items-center"
        >
          <FaGlobe className="mr-2" /> {/* Globe icon */}
        </button>
        {isLanguageOptionsVisible && (
          <div
            ref={languageOptionsRef}
            className="absolute right-0 bg-white text-black z-10 rounded-lg shadow-lg mt-1 w-40"
          >
            <ul className="p-2">
              <li
                onClick={() => handleLanguageChange("en")}
                className="hover:bg-gray-300 p-2 cursor-pointer rounded-md text-center"
              >
                English
              </li>
              <li
                onClick={() => handleLanguageChange("zh-cn")}
                className="hover:bg-gray-300 p-2 cursor-pointer rounded-md text-center"
              >
                简体中文
              </li>
              {/* Add more languages here */}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
