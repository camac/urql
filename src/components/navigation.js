import styled from "styled-components";
import { Link } from "react-static";

const sidebarZIndex = 900;

export const Navigation = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: row;
  height: 6rem;
  width: 100%;

  & img {
    margin-left: auto;
    @media (min-width: 768px) {
      margin-left: 0;
    }
  }
`;
export const SidebarContainer = styled.div`
  width: 26rem;
  min-width: 26rem;
  min-height: 100vh;
  @media (max-width: 768px) {
    min-width: 5rem;
    width: 5rem};
  }
`;

export const SidebarWrapper = styled.aside`
  font-family: "akkurat";
  background-image: url("../../static/svgs/pink-sidebar-background.svg");
  background-repeat: repeat-y;
  min-height: 100vh;
  padding-top: 18rem;
  min-width: 26rem;
  width: 26rem;
  z-index: ${sidebarZIndex};
  position: fixed;

  @media (max-width: 768px) {
    background-image: ${props =>
      props.overlay
        ? 'url("../../static/svgs/pink-sidebar-background.svg")'
        : 'url("../../static/svgs/collapsed-sidebar-background.svg")'};
    min-width: ${props => (props.overlay ? "26rem" : "5rem")};
    width: ${props => (props.overlay ? "26rem" : "5rem")};
    padding-top: 6rem;
  }
`;

export const SidebarNavItem = styled(Link)`
  color: white;
  margin-left: 4rem;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  display: inline-block;
`;

export const SidebarNavSubItem = styled(Link)`
  color: white;
  margin-left: 6rem;
  margin-top: 1rem;
  font-size: 1.4rem;
`;
