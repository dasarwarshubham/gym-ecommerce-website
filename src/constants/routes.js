export const HOME = "/";
export const HOME_ALT = "/home";
export const ABOUT = "/about";
export const CONTACT = "/contact";
export const FAQS = "/faqs";
export const EQUIPMENTS = "/equipments";
export const CATEGORIES = "categories";
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

export const MAP = "https://www.google.co.in/maps/place/India/@20.7589404,72.1266905,5z/data=!3m1!4b1!4m6!3m5!1s0x30635ff06b92b791:0xd78c4fa1854213a6!8m2!3d20.593684!4d78.96288!16zL20vMDNyazA?entry=ttu";
export const PHONE = "tel:+915555555555";
export const EMAIL = "mailto:hello.fitflex@gmail.com";
export const TWITTER = "https://www.twitter.com";
export const LINKEDIN = "https://www.linkedin.com";
export const INSTAGRAM = "https://www.instagram.com";
export const FACEBOOK = "https://www.facebook.com";
export const YOUTUBE = "https://www.youtube.com";

const API_BASE_URL = "https://fitflex.site";
// const API_BASE_URL = "http://127.0.0.1:8000";

export const API_ROUTES = {
  accounts: `${API_BASE_URL}/auth`,
  contact: `${API_BASE_URL}/auth/contact/`,
  profile: `${API_BASE_URL}/api/customers/me`,
  signup: `${API_BASE_URL}/api/customers/signup`,
  categories: `${API_BASE_URL}/api/categories`,
  equipments: `${API_BASE_URL}/api/products`,
  cart: `${API_BASE_URL}/api/carts`,
  order: `${API_BASE_URL}/api/orders`,
};
