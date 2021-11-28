import { FC } from "react";
import { blue, lightgray, red, white } from "../colors";
import styled from "styled-components";

interface ICard {
  title?: string;
  color?: string;
  children?: any;
}

const Title = styled.span`
  font-size: 1.5em;
  text-align: center;
`;

const CardRed = styled.div`
  border-radius: 0.25rem;
  background-color: ${red};
  color: ${white};
  width: 100%;
`;

const CardBlue = styled.div`
  border-radius: 0.25rem;
  background-color: ${blue};
  color: ${white};
  width: 100%;
`;

const CardGray = styled.div`
  border-radius: 0.25rem;
  background-color: ${lightgray};
  color: ${white};
  width: 100%;
`;

const Card: FC<ICard> = ({ title, color, children }) => {
  switch (color) {
    case "red":
      return (
        <CardRed className="p-2">
          <Title>{title}</Title>
          <div>{children}</div>
        </CardRed>
      );
    case "blue":
      return (
        <CardBlue className="p-2">
          <Title>{title}</Title>
          <div>{children}</div>
        </CardBlue>
      );
    case "gray":
      return (
        <CardGray className="p-2">
          <Title>{title}</Title>
          <div>{children}</div>
        </CardGray>
      );

    default:
      return (
        <CardRed className="p-2">
          <Title>{title}</Title>
          <div>{children}</div>
        </CardRed>
      );
  }
};

export default Card;
