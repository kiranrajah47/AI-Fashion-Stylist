import { useState } from "react";
import UploadBox from "../components/UploadBox";
import ImagePreview from "../components/ImagePreview";
import api from "../services/api";
import OccasionSelector from "../components/OccasionSelector";
import StyleSelector from "../components/StyleSelector";
import GeneratedImage from "../components/GeneratedImage";

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [message, setMessage] = useState("");
  const [occasion, setOccasion] = useState("");
  const [style, setStyle] = useState("");
  const [uploadedFilename, setUploadedFilename] = useState("");
  const [generatedImage, setGeneratedImage] = useState("");

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
      setUploadedFilename(response.data.filename);
    } catch (error) {
      console.error(error);
      setMessage("Upload failed.");
    }
  };

  const handleGenerate = async () => {
    if (!uploadedFilename) {
      setMessage("Please upload an image first.");
      return;
    }

    if (!occasion || !style) {
      setMessage("Please select an occasion and style.");
      return;
    }

    try {
      const response = await api.post("/generate", {
        filename: uploadedFilename,
        occasion: occasion,
        style: style,
      });

      setMessage(response.data.message);

      setGeneratedImage(
      `http://127.0.0.1:8000/${response.data.generated_image}`
      );

      console.log(response.data);

    } catch (error) {
      console.error(error);
      setMessage("Generation failed.");
    }


  };

  return (
    <div className="container">
      <h1>AI Virtual Fashion Stylist</h1>

      <UploadBox setSelectedImage={setSelectedImage} />

      {selectedImage && (
        <>
          <ImagePreview image={selectedImage} />

          <OccasionSelector
          occasion={occasion}
          setOccasion={setOccasion}
          />

          <StyleSelector
            style={style}
            setStyle={setStyle}
          />

          {!uploadedFilename ? (
            <button onClick={handleUpload}>
              Upload Image
            </button>
          ) : (
            <button onClick={handleGenerate}>
              ✨ Generate Outfit
            </button>
          )}

          
        </>
      )}

      <p>{message}</p>
      <GeneratedImage imageUrl={generatedImage} />
    </div>
  );
}

export default Home;