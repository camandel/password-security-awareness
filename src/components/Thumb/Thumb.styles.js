import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: scale-down;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  animation: animateMovieThumb 0.5s;

  @media screen and (max-width: 700px) {
    max-width: 380px;
  }

  :hover {
    opacity: 0.8;
  }

  @keyframes animateMovieThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
