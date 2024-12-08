import { ButtonLink } from "../../components";
import { paths } from "../../paths";

interface IntroProps {}

export function Intro(props: IntroProps) {
  return (
    <>
      Intro
      <ButtonLink to={paths.govpass.identityDocuments.fullPath}>
        Continue
      </ButtonLink>
    </>
  );
}
