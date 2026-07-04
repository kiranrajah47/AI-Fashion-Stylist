function ImagePreview({ image }) {

  const imageUrl = URL.createObjectURL(image);

  return (

    <div>

      <h3>Image Preview</h3>

      <img
        src={imageUrl}
        alt="Preview"
        width="300"
      />

    </div>

  );

}

export default ImagePreview;