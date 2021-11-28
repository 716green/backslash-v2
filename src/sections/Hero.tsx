import Card from "../UIElements/Card";
import styled from "styled-components";

const cards = [
  {
    id: 1,
    title: "Card Number 1",
    body: "Testing the card body on card 1",
    color: "red",
  },
  {
    id: 2,
    title: "Card Number 1",
    body: "Testing the card body on card 2",
    color: "blue",
  },
  {
    id: 3,
    title: "Card Number 1",
    body: "Testing the card body on card 3",
    color: "gray",
  },
];

const HeroSection = styled.section`
  height: calc(100vh - 68px);
`;

const CompanyInfo = styled.aside``;

const Hero = () => {
  return (
    <div className="w-full justify-center xl:flex lg:flex mb-8">
      <HeroSection
        id="app"
        className="py-8 xl:w-2/3 lg:w-2/3 md:w-full sm:w-full xs:w-full mx-auto"
      >
        <section className="h-2/5 py-8 flex">
          <CompanyInfo className="my-auto px-2">
            <h1 className="text-7xl">Backslash</h1>

            <h3 id="tagline" className="text-left text-2xl">
              {"{ / } Productivity Dashboard"}
            </h3>
          </CompanyInfo>
        </section>
        <section className="h-2/5 grid grid-rows grid-cols-9">
          {cards.map((card, i) => {
            return (
              <section
                key={i}
                className="flex justify-center xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-9 col-span-9 m-2"
              >
                <Card title={card.title} color={card.color}>
                  {card.body}
                </Card>
              </section>
            );
          })}
        </section>
        <section className="h-1/5 my-8 text-left p-2 overflow-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magni
          distinctio numquam assumenda delectus in, rem tempora modi totam
          debitis, dolor nisi excepturi facilis et sequi dignissimos.
        </section>
      </HeroSection>
    </div>
  );
};

export default Hero;
