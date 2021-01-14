import React from "react";
import Switch from "react-switch";
import { HiOutlineSun as HiSun, HiOutlineMoon as HiMoon } from "react-icons/hi";
import { useGlobalContext } from "../context/context";

const ThemeSwitch = () => {
  const { checked, toggleDarkMode, setChecked } = useGlobalContext();

  return (
    <div className="dark:text-gray-50 flex items-center ml-auto mr-3 mt-4 space-x-0.5 text-2xl text-gray-800 w-max">
      <HiMoon
        className={`${
          !checked ? "text-blue-700 scale-110 dark:text-yellow-500" : null
        } cursor-pointer hover:text-blue-600 dark:hover:text-yellow-500 hover:scale-110 transform transition-all`}
        onClick={() => {
          setChecked(false);
          toggleDarkMode();
        }}
      />

      <Switch
        checked={checked}
        onChange={toggleDarkMode}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={15}
        width={48}
        onColor={`#0d2467`}
        offColor={`#df8d04`}
        handleDiameter={20}
      />

      <HiSun
        className={`${
          !checked ? null : "text-blue-700 scale-110 dark:text-yellow-500"
        } cursor-pointer hover:text-blue-600 dark:hover:text-yellow-500 hover:scale-110 transform transition-all`}
        onClick={() => {
          setChecked(true);
          toggleDarkMode();
        }}
      />
    </div>
  );
};

export default ThemeSwitch;
