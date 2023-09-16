export const HOME = "/";
export const HOME_ALT = "/home";
export const ABOUT = "/about";
export const CONTACT = "/contact";
export const FAQS = "/faqs";
export const EQUIPMENTS = "/equipments";
export const EQUIPMENTS_HOME = `${EQUIPMENTS}/home`;
export const EQUIPMENTS_COMMERCIAL = `${EQUIPMENTS}/commercial`;
export const BLOGS = "/blogs";
export const PAGE_NOT_FOUND_404 = "/not-found";

export const LOGIN = "/login";
export const SIGNUP = "/signup";
export const PROFILE = "/account";
export const FORGOT_PASSWORD = "/forgot-password";
export const RESET_PASSWORD = "/reset-password";
export const VERIFY_EMAIL = "/verify-email";

export const CART = "/cart";
export const SHIPPING = "/shipping";
export const REVIEW = "/review";
export const PAYMENT = "/payment";
export const CONFIRMATION = "/confirmation";

export const EMAIL = "mailto:info@fitflex.com";
export const TWITTER = "https://www.twitter.com";
export const LINKEDIN = "https://www.linkedin.com";
export const INSTAGRAM = "https://www.instagram.com";
export const FACEBOOK = "https://www.facebook.com";

// const API_BASE_URL = "http://127.0.0.1:8000";
// const API_BASE_URL = "http://127.0.0.1";
const API_BASE_URL = "http://16.171.21.29";

export const API_ROUTES = {
  equipments: `${API_BASE_URL}/api/products`,
  accounts: `${API_BASE_URL}/auth`,
  profile: `${API_BASE_URL}/api/customers/me`,
  signup: `${API_BASE_URL}/api/customers/signup`,
  cart: `${API_BASE_URL}/api/carts`,
  order: `${API_BASE_URL}/api/orders`,
};
