import AdminAuthGuardHOC from "@/components/admin/AdminAuthGuardHOC";
import AdminAuthNavbar from "@/components/admin/AdminAuthNavbar";
import Container from "@/components/shared/Container";

export default function layout({ children }) {
  return (
    <AdminAuthGuardHOC>
      <AdminAuthNavbar />
      <Container>{children}</Container>
    </AdminAuthGuardHOC>
  );
}
