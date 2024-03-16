export const AUTH_TOKEN_KEY = "@AUTH_TOKEN";

export const AuthRoutes = [
  {
    title: "Login",
    href: "/login",
  },
  {
    title: "Create Account",
    href: "/register",
  },
];

export const ProductRoutes = [
  {
    title: "All Products",
    href: "/products",
    auth: false,
  },
  {
    title: "New Drops",
    href: "/new-drops",
    auth: false,
  },
  {
    title: "My Orders",
    href: "/orders",
    auth: true,
  },
  {
    title: "Returns",
    href: "/returns",
    auth: true,
  },
];

export const SupportRoutes = [
  {
    title: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
export const AdminRoutes = [
  {
    title: "Dashboard",
    href: "/admin",
  },
  {
    title: "Product Management",
    href: "/admin/products",
  },
  {
    title: "Order Management",
    href: "/admin/orders",
  },
  {
    title: "Shop Management",
    href: "/admin/shop",
  },
];
