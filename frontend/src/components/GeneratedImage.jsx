function GeneratedImage({ imageUrl }) {
  if (!imageUrl) return null;

  return (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      <h2>Generated Outfit</h2>

      <img
        src={imageUrl}
        alt="Generated Outfit"
        width="300"
        style={{
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
      />
    </div>
  );
}

export default GeneratedImage;