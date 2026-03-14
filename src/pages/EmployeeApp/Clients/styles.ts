import styled from "@emotion/styled";
import { NavLink, type NavLinkRenderProps, Link } from "react-router-dom";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px;
`;

export const NavigationContainer = styled.div`
  display: flex;
  gap: 30px;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;
export const CompanyLink = styled.div`
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;
  color: black;
`;

export const LogoImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
`;

export const ButtonControl = styled.div`
  width: 300px;
`;

export const getActiveStyles = ({ isActive }: NavLinkRenderProps) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "underline" : "none",
});
