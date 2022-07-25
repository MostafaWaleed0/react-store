import React from "react";
import styled from "styled-components";
import { sp } from "../styles/variables";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../app/slices/uiSlice";

const SDot = styled.button`
  border: 0;
  padding: 0;
  cursor: pointer;
  height: 0.625rem;
  aspect-ratio: 1/ 1;
  margin: 0 ${sp.xxmSpacing};
  background-color: #fadcd9;
  border-radius: 9999px;
  display: inline-block;
  background-color: ${({ isActive }) => (isActive ? "#f79489" : "")};
`;

export default function Dot(index) {
  const dispatch = useDispatch();
  const slideIndex = useSelector((state) => state.ui.slideIndex);

  console.log(index.index);
  const isActive = slideIndex === index.index;

  return (
    <li key={index + 1}>
      <SDot
        aria-current={isActive ? "true" : "false"}
        onClick={() => dispatch(uiActions.switchSlider(index.index))}
        isActive={isActive}
      ></SDot>
    </li>
  );
}
