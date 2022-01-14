import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Banner = () => {
  return (
    <StaticImage
      placeholder="tracedSVG"
      src="../assets/images/homeOffice.png"
      alt="rita"
      objectFit="cover"
      style={{ width: "99%" }}
    />
  );
};

export default Banner;
