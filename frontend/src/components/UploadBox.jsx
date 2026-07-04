import { useRef } from "react";

function UploadBox({ setSelectedImage }) {
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedImage(file);
    }
  };

  const openFilePicker = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="upload-box" onClick={openFilePicker}>
        <h2>📷</h2>
        <h3>Click to Upload Image</h3>
        <p>JPG • PNG • JPEG</p>
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </>
  );
}

export default UploadBox;