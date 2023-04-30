import PropTypes from "prop-types";
import { Container, Title } from "./styles";

function Section({ title, children }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
