import { Outlet } from "react-router";
import { Footer, Header, Main } from "../components";

export function GovPassLayout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
