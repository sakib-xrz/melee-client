import AuthGuardHOC from "@/components/shared/AuthGuardHOC";

export default function PrivateRouteLayout({ children }) {
  return <AuthGuardHOC>{children}</AuthGuardHOC>;
}
