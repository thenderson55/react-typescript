import styled from "styled-components";
import { Button } from "semantic-ui-react";

export const CustomButton = styled(Button)`
  &&& {
    width: 140px;
    background-color: pink;
    border-radius: 20px !important;
    &:hover {
      background-color: greenyellow;
    }
  }
`;
