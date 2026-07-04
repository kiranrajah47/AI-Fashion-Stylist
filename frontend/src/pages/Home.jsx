import { useState } from "react";
import UploadBox from "../components/UploadBox";
import ImagePreview from "../components/ImagePreview";
import api from "../services/api";

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!selectedImage) {
      setMessage("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      const response = await api.post("/upload", formData);

      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage("Upload failed.");
    }
  };

  return (
    <div className="container">
      <h1>AI Virtual Fashion Stylist</h1>

      <UploadBox setSelectedImage={setSelectedImage} />

      {selectedImage && (
        <>
          <ImagePreview image={selectedImage} />

          <button onClick={handleUpload}>
            Upload Image
          </button>
        </>
      )}

      <p>{message}</p>
    </div>
  );
}

export default Home;