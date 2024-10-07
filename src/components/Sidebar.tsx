import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaHome, FaList, FaFlask, FaCog, FaLanguage } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface MenuItem {
  icon: React.ReactNode;
  titleKey: string;
  path: string;
  subItems?: { titleKey: string; path: string }[];
}

const menuItems: MenuItem[] = [
  { icon: <FaHome />, titleKey: "sidebar.home", path: "/" },
  { icon: <FaList />, titleKey: "sidebar.items", path: "/items" },
  {
    icon: <FaFlask />,
    titleKey: "sidebar.recipes",
    path: "/recipes",
    subItems: [
      { titleKey: "sidebar.basicRecipes", path: "/recipes" },
      { titleKey: "sidebar.advancedRecipes", path: "/recipes" },
    ],
  },
  { icon: <FaCog />, titleKey: "sidebar.machines", path: "/machines" },
];

export const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleSubMenu = (index: number) => {
    setOpenMenus((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "zh" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div
      className={`sidebar ${isExpanded ? "w-48" : "w-14"} h-screen bg-gray-800 text-white transition-all duration-300`}
    >
      <button
        onClick={toggleSidebar}
        className="w-full p-3 text-center hover:bg-gray-700"
      >
        {isExpanded ? "<<" : ">>"}
      </button>
      <nav className="flex flex-col justify-between h-[calc(100%-3rem)]">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="mb-1">
              <div
                onClick={() =>
                  item.subItems
                    ? toggleSubMenu(index)
                    : handleNavigation(item.path)
                }
                className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-700"
              >
                <span className="w-6 text-lg">{item.icon}</span>
                {isExpanded && (
                  <span className="ml-2 text-sm">{t(item.titleKey)}</span>
                )}
                {isExpanded && item.subItems && (
                  <span className="ml-auto text-xs">
                    {openMenus[index] ? "▲" : "▼"}
                  </span>
                )}
              </div>
              {isExpanded && item.subItems && openMenus[index] && (
                <ul className="bg-gray-700">
                  {item.subItems.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      onClick={() => handleNavigation(subItem.path)}
                      className="pl-10 py-2 text-xs cursor-pointer hover:bg-gray-600"
                    >
                      {t(subItem.titleKey)}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <button
            onClick={toggleLanguage}
            className="flex items-center w-full px-3 py-2 cursor-pointer hover:bg-gray-700"
          >
            <FaLanguage className="w-6 text-lg" />
            {isExpanded && (
              <span className="ml-2 text-sm">{t("language")}</span>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};
