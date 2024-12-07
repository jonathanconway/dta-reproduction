import { Link } from "react-router";
import * as Styled from "./footer.styles";

export function Footer() {
  return (
    <Styled.Footer>
      <Styled.FooterInner>
        <div>&copy; GovPass</div>

        <Styled.FooterLinks>
          <Styled.FooterLink>
            <Link to="/privacy-policy">Privacy policy</Link>
          </Styled.FooterLink>
          <Styled.FooterLink>
            <Link to="/terms-and-conditions">Terms and conditions</Link>
          </Styled.FooterLink>
          <Styled.FooterLink>
            <Link to="/contact-us">Contact us</Link>
          </Styled.FooterLink>
        </Styled.FooterLinks>
      </Styled.FooterInner>
    </Styled.Footer>
  );
}
