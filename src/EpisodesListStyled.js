import styled from "styled-components";
import { Grid } from "semantic-ui-react";

export const CustomGridColumn = styled(Grid.Column)`
  &&& {
    padding: 5px;
  }
`;

export const FavButton = styled.button`
  height: 20px;
  font-size: 0.8rem;
  background-color: lightskyblue;
  border-radius: 3px;
  color: black;
`;