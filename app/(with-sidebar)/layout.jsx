import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";

export default function WithSidebarLayout({ children }) {
  return (
    <main>
      <Navbar />

      <div className="flex justify-between">
        <div className="hidden bg-white lg:w-3/12 2xl:w-2/12 lg:block">
          <Sidebar />
        </div>
        <div className="w-full lg:w-9/12 xl:w-10/12">{children}</div>
      </div>
    </main>
  );
}
