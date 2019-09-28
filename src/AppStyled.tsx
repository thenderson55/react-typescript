import styled from "styled-components";
import { Grid } from "semantic-ui-react";

export const CustomGridColumn = styled(Grid.Column)`
  &&& {
    padding: 5px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background: white;
  border-bottom: 1px solid black;
  padding: 0.5rem;
  position: sticky;
  top: 0;
  z-index: 3;
`;
