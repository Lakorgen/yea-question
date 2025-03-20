import { Header } from "@/widgets/header";
import { Outlet } from "react-router";

function BaseLayout() {
  return (
    <main>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </main>
  );
}

export default BaseLayout;
