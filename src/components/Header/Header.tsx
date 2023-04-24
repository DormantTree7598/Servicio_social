import React from "react";
import styled from "styled-components";
import Logo from "../../assets/LogoIbero.png";
import SearchIcon from "@mui/icons-material/Search";

export const Header = () => {
  return (
    <HeaderWrap>
      <ImageDiv>
        <img src={Logo} />
      </ImageDiv>
      <Buscador>
        <SearchBar placeholder="Buscar..." />
        <IconWrap>
          <SearchIcon />
        </IconWrap>
      </Buscador>
      <Buttom>
        <Login>
          <span>LOG IN</span>
        </Login>
      </Buttom>
      <SelectDiv>
        <Select>
          <option value="opcion1">ES</option>
          <option value="opcion2">ING</option>
        </Select>
      </SelectDiv>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0px;
`;
const ImageDiv = styled.div`
  position: absolute;
  width: 8.3%;
  height: 72%;
  top: 28%;
  left: 2.6%;
  z-index: 1;
`;

const Buscador = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 17%;
  height: 26%;
  top: 39.5%;
  left: 68%;
`;
const IconWrap = styled.div`
  position: absolute;
  width: 6%;
  height: 72.5%;
  left: 94%;
  top: 8%;
  z-index: 1;
`;

const SearchBar = styled.input`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  padding-left: 5%;
  background-color: #f0f0f0;
  border: 1px solid #000000;
  color: rgba(26, 32, 44, 0.58);
  border-radius: 115px;
  :placeholder {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 21px;
    display: flex;
    align-items: center;
    letter-spacing: 0.15em;

    color: rgba(26, 32, 44, 0.58);
  }
`;
const Buttom = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 6.7%;
  height: 36%;
  top: 36%;
  left: 90%;
`;
const Login = styled.button`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #ff4060;
  border-radius: 64px;
  text-transform: uppercase;
  color: #1a202c;
  :span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #1a202c;
  }
`;
const SelectDiv = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 4%;
  height: 36%;
  top: 36%;
  left: 86%;
`;
const Select = styled.select`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  border: 1px solid #000000;
  color: rgba(26, 32, 44, 0.58);
  border-radius: 115px;
`;
export default Header;
