import { FC } from "react";
import { Loader } from "smarthr-ui";
import styled, { css } from "styled-components";

export const LoadingTableBodyCover: FC = () => {
  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  );
};

const Wrapper = styled.div(
  ({ theme: { color } }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background-color: ${color.BACKGROUND};
    opacity: 0.7;
  `
);
