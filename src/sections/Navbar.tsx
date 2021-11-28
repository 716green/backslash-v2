import { useState, useEffect } from "react";

import { ChevronDownIcon, UserIcon } from "@heroicons/react/outline";
import Logo from "../UIElements/Logo";
import { red } from "../colors";
import styled from "styled-components";

const navigation = [
  {
    text: "About",
    url: "/",
  },
  {
    text: "Download",
    url: "/",
  },
  {
    text: "Docs",
    url: "/",
  },
  {
    text: "Pricing",
    url: "/",
  },
];

const navName = "Home";

const NavigationName = styled.span`
  color: ${red};
  cursor: pointer;
`;

const Navbar = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isSmall, setIsSmall] = useState<boolean>(width < 550);

  const resize = (width: number) => {
    setWidth(width);
    if (width < 550) setIsSmall(true);
    else setIsSmall(false);
  };
  const handleResize = () => {
    setTimeout(() => {
      resize(window.innerWidth);
    }, 500);
  };

  useEffect(() => {
    const resizeHandler = () => {
      let timerCount = 0;
      while (timerCount > 0) timerCount--;
      if (timerCount === 0) handleResize();
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [width]);

  const FullNavbar = () => {
    return (
      <section className="my-auto">
        <nav className="text-dark">
          <ul className="flex justify-around">
            {navigation.map((item, i) => {
              return (
                <li className="flex my-auto w-22 px-2" key={i}>
                  <a href={item.url}>{item.text}</a>
                </li>
              );
            })}
            <li className="w-22 px-2">
              <UserIcon className="w-6" />
            </li>
          </ul>
        </nav>
      </section>
    );
  };

  const DropDown = () => {
    return (
      <section className="flex my-auto">
        <NavigationName className="px-2">{navName}</NavigationName>
        <ChevronDownIcon className="w-4" />
      </section>
    );
  };

  return (
    <div className="flex shadow-md rounded-b-sm px-12 py-2 my-auto align-baseline justify-around">
      <section className="w-full my-auto">
        <Logo />
      </section>

      {isSmall ? <DropDown /> : <FullNavbar />}
    </div>
  );
};

export default Navbar;
