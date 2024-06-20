import React from "react";

const Header = ({ children }) => {
  return (
    <header className="pt-6 bg-white p-2">
      <h1 className="text-4xl">{children}</h1>
    </header>
  );
};

export default Header;
