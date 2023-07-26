import styled, { createGlobalStyle } from "styled-components";
import { XCircleIcon, StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarFill } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import ComicDetail from "../Components/ComicDetail";

/* Reusable Styles */

const cardBackgroundStyles = `
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const flexCenterStyles = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* DataList */

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  place-items: center;
  gap: 2rem;
  min-height: 100vh;
  margin: 1.25rem;
`;

export const CardContainer = styled.div`
  ${cardBackgroundStyles}
  width: 91.6667%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.375rem;
  color: #f7f7f7;
`;

export const StyledButton = styled.button`
  width: 2.5rem;
  align-self: flex-end;
`;

export const StyledName = styled.span`
  margin: 1.25rem; 
  font-size: 1.125rem;
`;

export const ModalOutside = styled.div`
  position: fixed;
  inset: 0;
  ${flexCenterStyles}
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalInside = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0px 4px 8px rgba(249, 82, 117, 0.6);
  overflow-y: scroll;
  height: 83.3333%;
  width: 66.6667%;
  scroll-behavior: smooth;
`;

export const ModalContainer = styled.div`
  ${flexCenterStyles}
`;

export const Title1 = styled.h1`
  font-size: 1.875rem;
  color: #f56565;
  margin-left: 0.75rem;
`;

export const StyledXCircleIcon = styled(XCircleIcon)`
  width: 2rem;
`;

export const ModalWarning = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-top: 10rem;
`;

export const EmptyFavs = styled.h1`
  height: 43vh;
  text-align: center;
  margin-top: 18rem;
  font-size: x-large;
`;

/* Header */

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid;
  padding: 0.5rem;
  box-shadow: 2px 2px 2px 2px rgba(156, 163, 175, 0.4);
  border-radius: 0 0 0.375rem 0.375rem;
`;

export const ImageContainer = styled.div`
  width: 8.3333%;
`;

export const Form = styled.form`
  ${flexCenterStyles}
  width: 83.3333%;
`;

export const SearchInput = styled.input`
  border-left-width: 2px;
  width: 100%;
  padding: 0.25rem;
  outline: none;
`;

export const Select = styled.select`
  height: 100%;
`;

export const StyledLink = styled(Link)`
  ${flexCenterStyles}
`;

export const StarOutlineIcon = styled(StarOutline)`
  width: 1.75rem;
  display: block;
  margin: 0 auto;
`;

export const StarFillIcon = styled(StarFill)`
  width: 1.75rem;
  display: block;
  margin: 0 auto;
`;

/* Footer */

export const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  padding: 1.25rem;
  border-top-width: 2px;
  width: 100%;
`;

export const FooterTitle = styled.h1`
  text-align: center;
`;

/* Comic Modal */

export const ComicModalContainer = styled.div`
  margin: auto;
  ${flexCenterStyles}
  width: 83.3333%;
  gap: 0.75rem;
  margin-top: 2.5rem;
`;

export const ComicCover = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledImg = styled.img`
  max-width: 12rem;
`;

export const ModalName = styled.small`
  text-align: center;
`;

export const ModalDescription = styled.p`
  text-align: justify;
  width: 
`;

/* Comic Detail */

export const ComicMain = styled.main`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  justify-items: center;
  padding: 1.25rem;
  width: 83.3333%;
  margin: auto;
`;

export const ComicData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: justify;
  ${flexCenterStyles}
  font-size: 1.125rem;
`;

export const ComicDetailCover = styled.img`
  max-width: 24rem;
`;

/* Small screens */

export const GlobalStyle = createGlobalStyle`
  /* ... (same CSS reset as before) ... */

  /* Additional styles for small screens (max-width: 640px) */
  @media (max-width: 326px) {
    /* Update grid to 2 columns for small screens */
    ${MainContainer},
    ${ComicMain} {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      grid-template-rows: repeat(2, minmax(0, 1fr));
      align-items: center;
    }

    /* Convert flex containers to flex column for small screens */
    ${CardContainer},
    ${ModalInside},
    ${ComicModalContainer},
    ${ComicData} {
      flex-direction: column;
    }

    ${ImageContainer} {
      width: 85%;
      padding: 5px;
    }

    ${Form} {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    ${SearchInput} {
      width: 100%;
      border: 1px solid gray;
      margin-right: 5px;
      padding: 0;
    }

    ${StyledHeader} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    ${ComicDetailCover} {
      width: 14rem;
    }
  }
`;