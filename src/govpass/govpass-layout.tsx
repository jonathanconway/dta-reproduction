import { ReactNode } from "react";
import { Footer, Header, Main } from "../components";

interface GovPassLayoutProps {
  readonly children?: ReactNode;
}

export function GovPassLayout(props: GovPassLayoutProps) {
  return (
    <div>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </div>
  );
}
