import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import store from "./redux/store";

import "./styles/index.scss";
import "./styles/customBootstrap.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Helmet>
      <link rel="canonical" href="https://fitflex.site" />
      <meta name="description" content="Discover top-quality gym equipment at FitFlex. Shop cardio, strength training gear, accessories & more for a better fitness journey. Elevate your workouts now!" />
      <meta name="keywords" content="fitness equipment, gym equipment, cardio machines, strength training, workout accessories, recovery gear, fitness gear" />
      <meta property="og:title" content="FitFlex - Your Ultimate Fitness Equipment Store" />
      <meta property="og:description" content="Discover top-quality gym equipment at FitFlex. Shop cardio, strength training gear, accessories & more for a better fitness journey. Elevate your workouts now!" />
      <meta property="og:image" content="https://www.fitflex.site/fitflex-og-card.png" />
      <meta property="og:url" content="https://www.fitflex.site" />
      <meta name="twitter:title" content="FitFlex - Your Ultimate Fitness Equipment Store" />
      <meta name="twitter:description" content="Discover top-quality gym equipment at FitFlex. Shop cardio, strength training gear, accessories & more for a better fitness journey. Elevate your workouts now!" />
      <meta name="twitter:image" content="https://www.fitflex.site/fitflex-twitter-card.png" />
      <title>FitFlex - Your Ultimate Fitness Equipment Store</title>
    </Helmet>
    <App />
  </Provider>
);
