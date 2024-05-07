"use client";
import Banner from "./components/Banner/index";
import Aboutus from "./components/Aboutus/index";
import Dedicated from "./components/Dedicated/index";
import Digital from "./components/Digital/index";
import Beliefs from "./components/Beliefs/index";
import Wework from "./components/Wework/index";
import Ourteam from "./components/Ourteam/index";
import Featured from "./components/Featured/index";
import Manage from "./components/Manage/index";
import FAQ from "./components/FAQ/index";
import Testimonials from "./components/Testimonials/index";
import Articles from "./components/Articles/index";
import Joinus from "./components/Joinus/index";
import Insta from "./components/Insta/index";
import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <Banner />
        <Aboutus />
        {/* <Dedicated /> */}
        {/* <Digital /> */}
        <Beliefs />
        <Wework />

        <Articles />
        {/* <Ourteam /> */}
        {/* <Featured /> */}
        {/* <Manage /> */}
        <Testimonials />
        <FAQ />

        {/* <Joinus /> */}
        <Insta />
      </main>
    </NextUIProvider>
  );
}
