import { Header } from "@/widgets/header";
import { Outlet } from "react-router";

function BaseLayout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default BaseLayout;
