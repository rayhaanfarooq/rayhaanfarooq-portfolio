// src/analytics.js
import ReactGA from 'react-ga';

const TRACKING_ID = 'G-48BTH3XCXD'; // Your Google Analytics tracking ID
ReactGA.initialize(TRACKING_ID);

export const logPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const logEvent = (category, action) => {
  ReactGA.event({ category, action });
};
