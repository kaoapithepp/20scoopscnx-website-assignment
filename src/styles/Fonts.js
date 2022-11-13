import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    src: url("/fonts/Poppins/Poppins-Light.ttf") format("truetype");
  }
  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/Poppins/Poppins-Regular.ttf") format("truetype");
  }
  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/Poppins/Poppins-Medium.ttf") format("truetype");
  }
  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    src: url("/fonts/Poppins/Poppins-SemiBold.ttf") format("truetype");
  }
`;