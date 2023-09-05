import React, { useRef, useState } from "react";
import Icon from "@/components/UI/Icon/Icon";
import cn from "@/utils/helpers/cn";
import useOnClickOutside from "@/utils/hooks/useClose";
import Image from "next/image";
import useI18n from "@/utils/hooks/use18n";

const Dropdown = ({
  list,
  currentValue,
  type,
  onChange,
  placeholder,
  absolute = true,
  className,
}) => {
  const openRef = useRef();
  const i18n = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const [value, setValue] = useState(currentValue);

  useOnClickOutside(openRef, () => setIsOpen(false));
  const selectCountry = (value) => {
    setSearch("");
    setValue(value);
    onChange(value);
    setIsOpen(false);
  };
  return (
    <div className="relative w-full" ref={openRef}>
      <button
        className={cn(
          !value ? "py-1" : "",
          "focus:shadow-outline w-full rounded-sm border border-border p-1 text-left text-foreground focus:outline-none",
          className
        )}
        onClick={toggleDropdown}
      >
        {value ? (
          <div className="flex justify-between">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "flex",
                "items-center",
                "justify-between",
                "w-full",
                "px-0.5",
                "rounded-sm",
                "cursor-pointer border-border border"
              )}
            >
              <div className="flex py-1">
                {type === "icon" && (
                  <span className=" mr-2.5 ml-1 flex items-center">
                    <Image
                      className="h-5"
                      src={`https://www.ggmgastro.com/assets/flags/1x1/${value}.svg`}
                      alt={value}
                      width={20}
                      height={20}
                    />
                  </span>
                )}
                <div className="text-sm">
                  {list.find(
                    (item) => item.code.toLowerCase() === value.toLowerCase()
                  )?.name || ""}
                </div>
              </div>
              <div className="flex h-full w-[24px] items-center justify-center border-l border-border">
                <Icon
                  icon={cn(isOpen ? "icon-chevron-up" : "icon-chevron-down")}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-between pl-2">
            <span>{placeholder}</span>
            <div className="flex h-full w-[24px] items-center border-l border-border">
              <span>
                <Icon
                  icon={cn(isOpen ? "icon-chevron-up" : "icon-chevron-down")}
                />
              </span>
            </div>
          </div>
        )}
      </button>

      {isOpen && (
        <div
          className={cn(
            "h-full max-h-40 w-full overflow-y-auto border-t-0 border-border border bg-card",
            {
              absolute: absolute,
              "shadow-lg": absolute,
              "h-60": absolute,
              "z-10": absolute,
            }
          )}
        >
          {type === "icon" && (
            <div className="flex justify-between">
              <input
                type="text"
                placeholder={i18n.t("Search")}
                className="w-full border-b border-border p-2 text-sm outline-none bg-background text-foreground"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          )}

          <ul className="list-reset">
            {list
              .filter(
                (item, index) =>
                  search === "" ||
                  (item.name.toLowerCase().includes(search.toLowerCase()) &&
                    item.hasOwnProperty("code") &&
                    index > 0)
              )
              .map((country, index) =>
                country.hasOwnProperty("code") ? (
                  <li
                    key={index}
                    className="flex cursor-pointer items-center gap-x-2.5 py-2 px-3 first:pt-3 hover:bg-blue-gray-500/50"
                    onClick={() => selectCountry(country.code)}
                  >
                    {type === "icon" && (
                      <Image
                        className="h-[18px] w-[18px]"
                        src={`https://www.ggmgastro.com/assets/flags/1x1/${country.code}.svg`}
                        alt="country flag"
                        width={18}
                        height={18}
                      />
                    )}
                    <div className="text-sm">
                      {country.name ? country.name : country.sign}
                    </div>
                  </li>
                ) : (
                  <li
                    className="text-md my-1 bg-gray-200 px-3 py-2"
                    key={index}
                  >
                    {country.name}
                  </li>
                )
              )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
