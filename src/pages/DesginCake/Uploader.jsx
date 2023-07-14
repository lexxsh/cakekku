import { useEffect, useState } from 'react';
import "./uploader.css";
import { Button } from "@mui/material";
import axios from 'axios';
import Head2 from '../../components/Heads/Head2';
import Footer from '../../components/Footer';
import { styled } from 'styled-components';
const Text1 = styled.p`
  font-size: 15px;
  position: relative;
  text-align: center;
  top:100px;
`
const Uploader = () => {
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "img/default_image.png",
  });

  let inputRef;

  const saveImage = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      URL.revokeObjectURL(image.preview_URL);
      const preview_URL = URL.createObjectURL(e.target.files[0]);
      setImage(() => ({
        image_file: e.target.files[0],
        preview_URL: preview_URL
      }));
    }
  };

  const deleteImage = () => {
    URL.revokeObjectURL(image.preview_URL);
    setImage({
      image_file: "",
      preview_URL: "img/default_image.png",
    });
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image.preview_URL);
    };
  }, []);

  const sendImageToServer = async () => {
    if (image.image_file) {
      const formData = new FormData();
      formData.append('my_cake_image', image.image_file);
      await axios.post('https://cakekku.shop/mycakecreate/', formData);
      alert("서버에 등록이 완료되었습니다!");
      setImage({
        image_file: "",
        preview_URL: "img/default_image.png",
      });
    } else {
      alert("사진을 등록하세요!");
    }
  };

  return (
    <>
      <Head2 />
      <Text1>좀전에 다운로드 받은 파일을 업로드 해주세요!</Text1>
      <div className="uploader-wrapper" style={{ marginTop: '200px' }}>
        <input
          type="file"
          accept="image/*"
          onChange={saveImage}
          onClick={(e) => e.target.value = null}
          ref={refParam => inputRef = refParam}
          style={{ display: "none" }}
        />
        <div className="img-wrapper">
          <img
            src={image.preview_URL}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>

        <div className="upload-button">
          <Button type="primary" variant="contained" onClick={() => inputRef.click()}>
            Preview
          </Button>
          <Button color="error" variant="contained" onClick={deleteImage}>
            Delete
          </Button>
          <Button color="success" variant="contained" onClick={sendImageToServer}>
            Upload
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Uploader;
