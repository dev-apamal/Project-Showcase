import React from "react";
import { Link } from "react-router";
import Menu from "./Menu";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState({
    notification: false,
    profile: false,
  });

  function toggleProfile() {
    setIsOpen((prevState) => ({
      ...prevState,
      profile: !prevState.profile,
    }));
  }

  return (
    <header className="flex justify-between items-center px-4 py-4  shadow-sm">
      <Link to="/">
        <img
          src="src/assets/images/logos/kite-logo.svg"
          alt="logo"
          className="w-6"
        />
      </Link>
      <h1>Dashboard</h1>
      <div className="profileAndNotification flex gap-4">
        <button className="hover:text-red-500">
          <i className="notification bi bi-bell"></i>
        </button>
        <button onClick={toggleProfile} className=" hover:text-red-500">
          <i className="profile bi bi-person-circle"></i>
        </button>
      </div>
      {isOpen.profile && (
        <div className="absolute top-12 right-4 bg-white p-4 shadow-sm w-full">
          {<Menu />}
        </div>
      )}
    </header>
  );
}
