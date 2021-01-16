import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

type Props = {
  children?: React.ReactNode;
};

const MainLayout = (props: Props) => {
  const { children } = props;

  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
