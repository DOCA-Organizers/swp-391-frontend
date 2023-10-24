import Header from "components/header/header";
import Report from "components/report";
import SlideBar from "components/sidebar/Sidebar";
import React from "react";

type Props = {};

const ReportPage = (props: Props) => {
  return (
    <div>
      <Header />
      <SlideBar />
      <Report />
    </div>
  );
};

export default ReportPage;
