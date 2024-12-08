import { Link } from "react-router";
import { paths } from "../paths";

export function Switchboard() {
  return (
    <div>
      <Link to={paths.govpass.fullPath}>GovPass</Link>
    </div>
  );
}
