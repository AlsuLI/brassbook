import React from "react";
// import s from "./Home.module.scss";

import { Card } from "../../ui/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { Main } from "../../components/Main/Main";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Main/>
    </>
  );
};
