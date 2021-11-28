import styled from "styled-components";
import { red } from "../colors";
import { DeviceTabletIcon } from "@heroicons/react/outline";

const LogoWrapper = styled.div`
  font-family: "Indie Flower", cursive;
  font-size: 2.2rem;
  font-weight: 600;
  margin: 2px;
  padding: 0px 8px;
  border: 2px black dashed;
  border-radius: 0.25rem;
  color: ${red};
`;

const Logo = () => {
  return (
    <LogoWrapper className="flex w-32 h-12">
      <DeviceTabletIcon className="w-8 h-12" />
      <div className="flex">
        <em className="text-dark">L</em>
        <em className="italic">o</em>
        <em className="text-dark">G</em>
        <em className="italic">o</em>
      </div>
    </LogoWrapper>
  );
};

export default Logo;
