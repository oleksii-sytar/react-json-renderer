import styled from "styled-components";

export const ComplexDataContainer = styled.div`
  display: flex;
  position: relative;
  padding-left: 27px;

  .val {
    padding-top: 20px;
  }

  .name {
    position: relative;

    &:after {
      content: attr(datatype);
      opacity: .4;
      position: absolute;
      left: 110%;
    }
  }
`;

export const ExpandButton = styled.button`
  cursor: pointer;
  display: block;
  position: absolute;
  left: 0;
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  outline: none;
`;
