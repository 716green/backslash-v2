import styled from "styled-components";
import { lightgray } from "../colors";

const SecondarySection = styled.section`
  height: 100vh;
  background-color: ${lightgray};
  color: white;
  flex-wrap: nowrap;
`;

const Secondary = () => {
  return (
    <SecondarySection className="justify-center py-8">
      <section className="h-full">
        <span className="h-2/5 text-7xl">Section 2</span>
        <p className="h-3/5">More Stuff</p>
      </section>
    </SecondarySection>
  );
};

export default Secondary;
