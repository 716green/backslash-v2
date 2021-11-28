import Hero from "../sections/Hero";
import Navbar from "../sections/Navbar";
import Secondary from "../sections/Secondary";

const sections = [<Hero />, <Secondary />];

const Layout = () => {
  return (
    <>
      <Navbar />
      <section>
        {sections.map((section, i) => {
          return <div key={i}>{section}</div>;
        })}
      </section>
    </>
  );
};

export default Layout;
