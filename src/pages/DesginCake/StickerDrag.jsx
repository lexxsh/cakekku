import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import number1 from './number1.png'
import Head2 from '../../components/Heads/Head2';
import styled from 'styled-components';
import number2 from './number2.png'
import number3 from './number3.png'
import number4 from './number4.png'
import number5 from './number5.png'
import number6 from './number6.png'
import number7 from './number7.png'
import number8 from './number8.png'
import number9 from './number9.png'
import number0 from './number0.png'
import Sticker from './Jjjang.png'

const Cake = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 10%;
  background-color: grey;
  border: 1px solid;
  border-color: #D9D9D9;
`;
const Title = styled.p`
  font-size: 20px;
  margin: 0 auto;
  text-align: center;
  margin-top: 20%;
`;
const MenuBox = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  background-color: #fff5e4;
  margin-top: 10%;
`;
const Addbutton1 = styled.button`
  position: absolute;
  top: 60%;
`;
const Addbutton2 = styled.button`
  position: absolute;
  top: 80%;
`;
const Addbutton3 = styled.button`
  position: absolute;
  top: 60%;
  left: 15%;
`;
const Addbutton4 = styled.button`
  position: absolute;
  top: 60%;
  left: 28%;
`;
const Addbutton5 = styled.button`
  position: absolute;
  top: 60%;
  left: 41%;
`;
const Addbutton6 = styled.button`
  position: absolute;
  top: 60%;
  left: 54%;
`;
const Addbutton7 = styled.button`
  position: absolute;
  top: 60%;
  left: 67%;
`;
const Addbutton8 = styled.button`
  position: absolute;
  top: 60%;
  left: 80%;
`;
const Addbutton9 = styled.button`
  position: absolute;
  top: 70%;

`;
const Addbutton10 = styled.button`
  position: absolute;
  top: 70%;
  left:15%;
`;
const Addbutton11 = styled.button`
  position: absolute;
  top: 70%;
  left:28%;

`;
const Addbutton12 = styled.button`
  position: absolute;
  top: 70%;
  left:41%;

`;
const ItemContainer = styled.div`
  position: absolute;
  width: 50px; /* 원하는 크기로 수정 */
  height: 50px; /* 원하는 크기로 수정 */
`;
const Imagecandle = styled.img`
  width: 30px; /* 원하는 크기로 수정 */
  height: 70px; /* 원하는 크기로 수정 */
`;
const ImageJjjang = styled.img`
  width: 40px; /* 원하는 크기로 수정 */
  height: 70px; /* 원하는 크기로 수정 */
`;
function useDragItems() {
  const [items, setItems] = useState([]);
 
  const addItem = (type) => {
    const newItem = {
      id: Date.now(),
      type: type,
      position: { x: (items.length + 1) * 10, y: 0 },
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const XItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return [items, addItem, XItem];
}

function StickDragItem({ item, XItem, index }) {
    const [position, setPosition] = useState({ x: item.position.x, y: item.position.y });
  
    const bind = useDrag((params) => {
      const [dragX, dragY] = params.offset;
      setPosition({ x: dragX, y: dragY });
    });
  
    const animatedStyle = useSpring({
      to: { x: position.x, y: position.y },
      config: { mass: 1, tension: 80, friction: 10 },
    });
  
    const positionStyle = {
      transform: `translate(${position.x}px, ${position.y}px)`,
      zIndex: index + 1,
    };
  
    const handleX = () => {
      setPosition({ x: -1000, y: -1000 }); // 화면 영역 밖으로 이동하여 숨김
      XItem(item.id);
    };
  
    return (
      <ItemContainer key={item.id} style={positionStyle}>
        {item.type === 'logo' && (
          <animated.div {...bind()} style={animatedStyle}>
            <Imagecandle src={number1} className="App-logo" alt="logo" />
            <button onClick={handleX} className="X-button">
              X
            </button>
          </animated.div>
        )}
        {item.type === 'logo1' && (
          <animated.div {...bind()} style={animatedStyle}>
            <Imagecandle src={number2} className="App-logo" alt="logo" />
            <button onClick={handleX} className="X-button">
            X
            </button>
          </animated.div>
        )}
        {item.type === 'logo2' && (
          <animated.div {...bind()} style={animatedStyle}>
            <Imagecandle src={number3} className="App-logo" alt="logo" />
            <button onClick={handleX} className="X-button">
            X
            </button>
          </animated.div>
        )}
        {item.type === 'logo3' && (
          <animated.div {...bind()} style={animatedStyle}>
            <Imagecandle src={number4} className="App-logo" alt="logo" />
            <button onClick={handleX} className="X-button">
            X
            </button>
          </animated.div>
        )}
        {item.type === 'logo4' && (
          <animated.div {...bind()} style={animatedStyle}>
            <Imagecandle src={number5} className="App-logo" alt="logo" />
            <button onClick={handleX} className="X-button">
            X
            </button>
          </animated.div>
        )}
        {item.type === 'logo5' && (
          <animated.div {...bind()} style={animatedStyle}>
            <Imagecandle src={number6} className="App-logo" alt="logo" />
            <button onClick={handleX} className="X-button">
              X
            </button>
          </animated.div>
        )}
        {item.type === 'logo6' && (
          <animated.div {...bind()} style={animatedStyle}>
            <Imagecandle src={number7} className="App-logo" alt="logo" />
            <button onClick={handleX} className="X-button">
              X
            </button>
          </animated.div>
        )}
        {item.type === 'logo7' && (
          <animated.div {...bind()} style={animatedStyle}>
            <Imagecandle src={number8} className="App-logo" alt="logo" />
            <button onClick={handleX} className="X-button">
              X
            </button>
          </animated.div>
        )}
        {item.type === 'logo8' && (
          <animated.div {...bind()} style={animatedStyle}>
            <Imagecandle src={number9} className="App-logo" alt="logo" />
            <button onClick={handleX} className="X-button">
              X
            </button>
          </animated.div>
        )}
        {item.type === 'logo9' && (
          <animated.div {...bind()} style={animatedStyle}>
            <Imagecandle src={number0} className="App-logo" alt="logo" />
            <button onClick={handleX} className="X-button">
              X
            </button>
          </animated.div>
        )}
         {item.type === 'logo10' && (
          <animated.div {...bind()} style={animatedStyle}>
            <button onClick={handleX} className="X-button">
              X
            </button>
            <ImageJjjang src={Sticker} className="App-logo" alt="logo" />
          </animated.div>
        )}
        {item.type === 'text' && (
          <animated.div {...bind()} style={animatedStyle}>
            Edit <code>src/App.js</code> and save to reload.
            <button onClick={handleX} className="X-button">
              X
            </button>
          </animated.div>
        )}
      </ItemContainer>
    );
  }
  
  
  
function StickDrag() {
  const [items, addItem, XItem] = useDragItems();

  return (
    <>
      <Head2></Head2>
      <Title>나만의 케이크 꾸미기</Title>
      <Cake></Cake>
      <MenuBox>dsadasd</MenuBox>
      <div className="App" style={{ touchAction: 'none' }}>
        <header className="App-header">
          {items.map((item, index) => (
            <StickDragItem
              key={item.id}
              item={item}
              XItem={XItem}
              index={index}
            />
          ))}
        </header>
        <div className="add-button-container">
          <Addbutton1 onClick={() => addItem('logo')} className="add-button">
            초 1
          </Addbutton1>
          <Addbutton3 onClick={() => addItem('logo1')} className="add-button">
            초 2
          </Addbutton3>
          <Addbutton4 onClick={() => addItem('logo2')} className="add-button">
            초 3
          </Addbutton4>
          <Addbutton5 onClick={() => addItem('logo3')} className="add-button">
            초 4
          </Addbutton5>
          <Addbutton6 onClick={() => addItem('logo4')} className="add-button">
            초 5
          </Addbutton6>
          <Addbutton7 onClick={() => addItem('logo5')} className="add-button">
            초 6
          </Addbutton7>
          <Addbutton8 onClick={() => addItem('logo6')} className="add-button">
            초 7
          </Addbutton8>
          <Addbutton9 onClick={() => addItem('logo7')} className="add-button">
            초 8
          </Addbutton9>
          <Addbutton10 onClick={() => addItem('logo8')} className="add-button">
            초 9
          </Addbutton10>
          <Addbutton11 onClick={() => addItem('logo9')} className="add-button">
            초 0
          </Addbutton11>
          <Addbutton12 onClick={() => addItem('logo10')} className="add-button">
            짱구
          </Addbutton12>
          <Addbutton2 onClick={() => addItem('text')} className="add-button">
            Add Text
          </Addbutton2>
        </div>
      </div>
    </>
  );
}

export default StickDrag;
