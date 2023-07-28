import styled, { createGlobalStyle } from "styled-components";
import {
  XCircleIcon,
  StarIcon as StarOutline,
} from "@heroicons/react/24/outline";
import { StarIcon as StarFill } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

/* Reusable Styles */

const flexCenterStyles = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
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
width: 91.6667%;
display: flex;
height: 25rem;
flex-direction: column;
justify-content: space-between;
color: #f7f7f7;
position: relative;

&:after {
  content:""; 
  position: absolute; 
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(0,0,0,1) 100%);
  height: 50%;
}
`;

export const StyledButton = styled.button`
  width: 2.5rem;
  align-self: flex-end;
  z-index: 10;
`;

export const StyledName = styled.span`
  margin: 1.25rem;
  font-size: 1.125rem;
  z-index: 10;
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
  justify-content: space-between;
`;

export const Title1 = styled.h2`
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

export const EmptyFavs = styled.h2`
  height: 43vh;
  text-align: center;
  margin-top: 18rem;
  font-size: x-large;
`;

/* Header */

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid rgba(150, 150, 150, 0.8);
  padding: 1rem;
  box-shadow: 2px 2px 2px 2px rgba(156, 163, 175, 0.4);
`;

export const ImageContainer = styled.div`
  width: 10%;
`;

export const Form = styled.form`
  ${flexCenterStyles}
  width: 83.3333%;
`;

export const SearchInput = styled.input`
  border-left-width: 1px;
  border-left-color: rgba(153, 153, 153, 0.5);
  border-left-style: solid;
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
  width: 2.5rem;
  display: block;
  margin: 0 auto;
`;

export const StarFillIcon = styled(StarFill)`
  width: 2.5rem;
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

export const FooterTitle = styled.h2`
  text-align: center;
`;

/* Character Card */

export const CharacterContainer = styled.div`
  width: 91.6667%;
  display: flex;
  height: 25rem;
  flex-direction: column;
  justify-content: space-between;
  color: #f7f7f7;
  position: relative;

  &:after {
    content:""; 
    position: absolute; 
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(0,0,0,1) 100%);
    height: 50%;
  }
`;

export const CharacterImg = styled.img`
  width: 100%;
  height: 100%; 
  object-fit: fill;
  position: absolute; 
  top: 0; 
  left: 0;
  border-radius: 0.5rem;
`;

export const CharacterAddToFav = styled.button`
  width: 2.5rem;
  align-self: flex-end;
  z-index: 10;
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
  width: ;
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
  @media (max-width: 326px) {
    ${MainContainer},
    ${ComicMain} {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      grid-template-rows: repeat(2, minmax(0, 1fr));
      align-items: center;
    }

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
