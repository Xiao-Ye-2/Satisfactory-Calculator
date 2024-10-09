import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

interface SearchDropdownProps<T> {
  items: T[];
  placeholder: string;
  onSelect: (item: T | null) => void;
  getItemName: (item: T) => string;
  getItemImage: (item: T) => string;
}

export function SearchDropdown<T>({
  items,
  placeholder,
  onSelect,
  getItemName,
  getItemImage,
}: SearchDropdownProps<T>) {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredItems = items.filter((item) =>
    getItemName(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onClick={() => setIsDropdownVisible(true)}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setIsDropdownVisible(true);
        }}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {isDropdownVisible && (
        <div className="absolute w-full max-h-64 overflow-y-auto border border-gray-300 bg-white rounded-lg z-10">
          <div
            onClick={() => {
              onSelect(null);
              setSearchTerm("");
              setIsDropdownVisible(false);
            }}
            className="p-2 hover:bg-gray-100 cursor-pointer"
          >
            {t("None")}
          </div>
          {filteredItems.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                onSelect(item);
                setSearchTerm(getItemName(item));
                setIsDropdownVisible(false);
              }}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
            >
              <Image
                src={getItemImage(item)}
                alt={getItemName(item)}
                className="w-8 h-8 mr-2"
                width={32}
                height={32}
              />
              <span>{getItemName(item)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
