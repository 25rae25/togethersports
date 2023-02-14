import { Fragment } from "react";
import MainBottom from "../components/Main/MainBottom";
import MainSlider from "../components/Main/MainSlider";
import MainTop from "../components/Main/MainTop";

const MainPage = () => {
  

  return (
      <Fragment>
        <MainTop />
        <MainSlider />
        <MainBottom />
      </Fragment>
  );
}

export default MainPage