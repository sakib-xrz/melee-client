import AdminAuthNavbar from "@/components/admin/AdminAuthNavbar";
import Container from "@/components/shared/Container";

export default function layout({ children }) {
  return (
    <div>
      <AdminAuthNavbar />
      <Container extraClassName={"max-w-[115rem]"}>{children}</Container>
    </div>
  );
}
