import { Link } from "react-router";
import { routes } from "../routes";

export function Switchboard() {
  return (
    <div>
      <Link to={routes.govpass.index}>GovPass</Link>
    </div>
  );
}
