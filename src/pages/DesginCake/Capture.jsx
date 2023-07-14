import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import { useRef } from 'react';
import Uploader from './Uploader';

export default function App() {
  const divRef = useRef(null);

  const handleDownload = async () => {
    if (!divRef.current) return;

    try {
      const div = divRef.current;
      const width = div.offsetWidth; // 원하는 가로 크기
      const height = div.offsetHeight; // 원하는 세로 크기
      const x = 50; // x 좌표값 (기준점으로부터의 거리)
      const y = 30; // y 좌표값 (기준점으로부터의 거리)

      const canvas = await html2canvas(div, { width:300, height:300, x, y, scale: 2 });

      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, 'result.png');
        }
      });
    } catch (error) {
      console.error('Error converting div to image:', error);
    }
  };

  return (
    <div className="App">
      <div ref={divRef}>
      </div>
      <button onClick={handleDownload}>다운로드</button>
      <Uploader></Uploader>
    </div>
  );
}