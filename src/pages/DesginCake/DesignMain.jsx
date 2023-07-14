import React, { useState, useRef } from "react";
import styled from "styled-components";
import { IoMdColorPalette } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";
import { BiUpload } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import ColorButton from "./ColorButton";
import StickDrag, { StickDragItem, useDragItems } from "./StickDrag";
import Drawing from "./Drawing";
import Head2 from "../../components/Heads/Head2";
import Footer from "../../components/Footer";
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import { Link } from "react-router-dom";
const Title = styled.p`
  font-size: 20px;
  margin: 0 auto;
  text-align: center;
  margin-top: 25%;
`;

const MenuBox = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  background-color: #fff5e4;
  margin-top: 10%;
  justify-content: space-evenly;
`;

const ColorPaletteButton = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 30px;
`;

const PaletteIcon = styled(IoMdColorPalette)`
  color: #495340;
  font-size: 45px;
`;

const SticIcon = styled(BsEmojiSmileFill)`
  color: #495340;
  font-size: 35px;
`;

const PenIcon = styled(BsPencilFill)`
  color: #495340;
  font-size: 40px;
`;

const PictureIcon = styled(BiUpload)`
  color: #495340;
  font-size: 40px;

`;

const Cake = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 10%;
  background-color: ${(props) => props.color};
  border: 1px solid;
  border-color: #d9d9d9;
`;

const ButtonContainer = styled.div`
  flex-direction: row;
  display:flex;
`

const DesignMain = () => {
  const [color, setColor] = useState("#000");
  const [activeButton, setActiveButton] = useState("palette");
  const [items, addItem, XItem] = useDragItems();
  const [isDrawingActive, setDrawingActive] = useState(false);
  const canvasRef = useRef(null);
  const arrayRef = useRef([]);

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setDrawingActive(buttonName === "pen"); // 버튼이 "pen"일 때 Drawing 활성화
  };

  const divRef = useRef(null);

  const handleDownload = async () => {
    if (!divRef.current) return;

    try {
      const div = divRef.current;
      const width = div.offsetWidth; // 원하는 가로 크기
      const height = div.offsetHeight; // 원하는 세로 크기
      const x = 50; // x 좌표값 (기준점으로부터의 거리)
      const y = 30; // y 좌표값 (기준점으로부터의 거리)

      const canvas = await html2canvas(div, { width: 300, height:320, x, y, scale: 2 });

      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, 'result.png');
        }
      });
    } catch (error) {
      console.error('div를 이미지로 변환하는 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <div style={{ touchAction: "none" }}ref={divRef}>
      <Head2></Head2>
      <Title>나만의 케이크 만들기</Title>
      <Cake color={color} />
      <MenuBox>
        <header>
          {items.map((item, index) => (
            <StickDragItem
              key={item.id}
              item={item}
              XItem={XItem}
              index={index}
            />
          ))}
        </header>

        <ColorPaletteButton
          isSelected={activeButton === "palette"}
          onClick={() => handleButtonClick("palette")}
        >
          <PaletteIcon />
        </ColorPaletteButton>

        <ColorPaletteButton
          isSelected={activeButton === "stic"}
          onClick={() => handleButtonClick("stic")}
        >
          <SticIcon />
        </ColorPaletteButton>

        <ColorPaletteButton
          isSelected={activeButton === "pen"}
          onClick={() => handleButtonClick("pen")}
        >
          <PenIcon />
        </ColorPaletteButton>

        <Link to = "/Uploader"> <ColorPaletteButton onClick={handleDownload}>
          <PictureIcon />
        </ColorPaletteButton></Link>
      </MenuBox>

      {activeButton === "palette" && (
        <ColorButton setColor={handleColorChange} />
      )}
      {activeButton === "stic" && <StickDrag addItem={addItem} />}
      {activeButton === "pen" && (
        <Drawing
          isActive={isDrawingActive}
          canvasRef={canvasRef}
          arrayRef={arrayRef}
          addItem={addItem} // addItem prop 추가
        />
      )}

    </div>
  );
};

export default DesignMain;