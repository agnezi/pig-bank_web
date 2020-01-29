import React from "react";
import DesktopMenu from "./DesktopMenu";

const MainMenu = () => {
  return <>{window.innerWidth > 768 ? <DesktopMenu /> : ""}</>;
};

export default MainMenu;
