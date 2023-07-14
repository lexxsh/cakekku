import React, { useRef, useEffect, useState } from 'react';
import Head2 from '../../components/Heads/Head2';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import Capture from "./Capture";

const defaultStyle = {
  border: '1px solid gray',
  display: 'inline-block',
  margin: '1rem',
  margin: '0 auto',
};

const Cake = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 10%;
  background-color: grey;
  border: 1px solid;
  border-color: #d9d9d9;
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
const Penbutton = styled.button`
  position: absolute;
  top: 32rem;
  left: 2rem;
`
const Pentitle = styled.p`
  position: absolute;
  top: 31rem;
  left: 5rem;
`
const Erabutton = styled.button`
  position: absolute;
  top: 38rem;
  left: 2rem;
`
const Eratitle = styled.p`
  position: absolute;
  top: 37rem;
  left: 7rem;
`

function Drawing({ isActive, canvasRef, arrayRef, addItem }) {
  const [ctx, setCtx] = useState();
  const [isErasing, setIsErasing] = useState(false);
  const [penSize, setPenSize] = useState(3);
  const [eraserSize, setEraserSize] = useState(10);
  const [penColor, setPenColor] = useState('black'); // 추가: 펜 색상 상태 변수
  const canvasRef2 = useRef(null);
  const array = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.lineJoin = 'round';
    setCtx(context);
  }, [canvasRef]);

  useEffect(() => {
    const context2 = canvasRef2.current.getContext('2d');
    context2.lineJoin = 'round';
  }, []);

  const updatePenSize = (event) => {
    setPenSize(parseInt(event.target.value));
  };

  const updateEraserSize = (event) => {
    setEraserSize(parseInt(event.target.value));
  };

  const updatePenColor = (color) => { // 추가: 펜 색상 변경 함수
    setPenColor(color);
  };

  const canvasEventListener = (event, type, canvas, context) => {
    let x, y;
    const rect = canvas.getBoundingClientRect();

    if (type === 'down') {
      if (event.type.startsWith('mouse')) {
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
      } else if (event.type.startsWith('touch')) {
        x = event.touches[0]?.clientX - rect.left;
        y = event.touches[0]?.clientY - rect.top;
      }
      array.push({ x, y });
    } else if (type === 'move') {
      if (array.length > 0) {
        if (event.type.startsWith('mouse')) {
          x = event.clientX - rect.left;
          y = event.clientY - rect.top;
        } else if (event.type.startsWith('touch')) {
          x = event.touches[0]?.clientX - rect.left;
          y = event.touches[0]?.clientY - rect.top;
        }
        context.beginPath();
        context.moveTo(array[array.length - 1].x, array[array.length - 1].y);
        context.lineTo(x, y);
        context.closePath();
        context.lineCap = 'round';
        if (isErasing) {
          context.globalCompositeOperation = 'destination-out';
          context.lineWidth = Math.max(1, eraserSize);
          context.strokeStyle = 'white'; // 지우개 색상
        } else {
          context.globalCompositeOperation = 'source-over';
          context.lineWidth = Math.max(1, penSize);
          context.strokeStyle = penColor; // 펜 색상
        }
        context.stroke();
        array.push({ x, y });
      }
    } else if (type === 'leave' || type === 'up') {
      array.length = 0;
    }
  };

  const handlePenClick = () => {
    setIsErasing(false);
  };

  const handleEraserClick = () => {
    setIsErasing(true);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      const canvas = canvasRef2.current;
      const context = canvas.getContext('2d');

      const handleMouseDown = (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        addItem({ id: Date.now(), x, y });
      };

      canvas.addEventListener('mousedown', handleMouseDown);

      return () => {
        canvas.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, [isActive, addItem, canvasRef2]);

  useEffect(() => {
    // Save the drawing array to the arrayRef when it changes
    arrayRef.current = array;
  }, [array, arrayRef]);

  return (
    <>
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <canvas
          ref={canvasRef}
          style={{
            ...defaultStyle,
            position: 'absolute',
            top: '-7.5rem',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: 'none'
          }}
          onMouseDown={(event) => canvasEventListener(event, 'down', canvasRef.current, ctx)}
          onMouseMove={(event) => canvasEventListener(event, 'move', canvasRef.current, ctx)}
          onMouseLeave={(event) => canvasEventListener(event, 'leave', canvasRef.current, ctx)}
          onMouseUp={(event) => canvasEventListener(event, 'up', canvasRef.current, ctx)}
          onTouchStart={(event) => canvasEventListener(event, 'down', canvasRef.current, ctx)}
          onTouchMove={(event) => canvasEventListener(event, 'move', canvasRef.current, ctx)}
          onTouchEnd={(event) => canvasEventListener(event, 'up', canvasRef.current, ctx)}
        />
        <canvas
          ref={canvasRef2}
          style={{
            ...defaultStyle,
            position: 'absolute',
            top: '-16.9rem',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: 'none'
          }}
          onMouseDown={(event) => canvasEventListener(event, 'down', canvasRef2.current, canvasRef2.current.getContext('2d'))}
          onMouseMove={(event) => canvasEventListener(event, 'move', canvasRef2.current, canvasRef2.current.getContext('2d'))}
          onMouseLeave={(event) => canvasEventListener(event, 'leave', canvasRef2.current, canvasRef2.current.getContext('2d'))}
          onMouseUp={(event) => canvasEventListener(event, 'up', canvasRef2.current, canvasRef2.current.getContext('2d'))}
          onTouchStart={(event) => canvasEventListener(event, 'down', canvasRef2.current, canvasRef2.current.getContext('2d'))}
          onTouchMove={(event) => canvasEventListener(event, 'move', canvasRef2.current, canvasRef2.current.getContext('2d'))}
          onTouchEnd={(event) => canvasEventListener(event, 'up', canvasRef2.current, canvasRef2.current.getContext('2d'))}
        />
      </div>
      <div className="container">
        <div>
          <Penbutton onClick={handlePenClick} position='absolute' top='50%'>Pen</Penbutton>
          <Pentitle>펜 사이즈 조절</Pentitle>
          <Erabutton onClick={handleEraserClick}>Eraser</Erabutton>
          <Eratitle>지우개 사이즈 조절</Eratitle>
        </div>
        <div>
          <label htmlFor="penSize">Pen Size:</label>
          <input
            type="range"
            id="penSize"
            min="1"
            max="10"
            value={penSize}
            onChange={updatePenSize}
          />
        </div>
        <div>
          <label htmlFor="eraserSize">Eraser Size:</label>
          <input
            type="range"
            id="eraserSize"
            min="1"
            max="30"
            value={eraserSize}
            onChange={updateEraserSize}
          />
        </div>
        <div>
          <label htmlFor="penColor">Pen Color:</label>
          <select id="penColor" value={penColor} onChange={(event) => updatePenColor(event.target.value)}>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Drawing;
