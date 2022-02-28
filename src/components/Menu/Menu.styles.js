import styled from 'styled-components';

export const Content = styled.nav`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 60px;
  background: rgba(0,0,0,0.7);

  ul {
    display: flex;
    list-style: none;
    width: 100%;
    justify-content: center;
  }

  ul li {
    margin: 0 1rem;
    padding: 0;
  }

  ul li a {
    text-decoration: none;
    text-transform: uppercase;
    color: #f4f4f4;

    display: inline-block;
    padding: 5px 20px;
    position: relative;
  }

  ul li a:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  ul li a:hover:after { 
    width: 100%; 
    left: 0; 
  }

  .active {
      font-weight: 600;
  }
`;