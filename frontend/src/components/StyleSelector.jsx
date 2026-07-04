function StyleSelector({ style, setStyle }) {
  return (
    <div className="selector-container">
      <label>Style</label>

      <select
        value={style}
        onChange={(e) => setStyle(e.target.value)}
      >
        <option value="">Select Style</option>
        <option value="Formal">Formal</option>
        <option value="Modern">Modern</option>
        <option value="Traditional">Traditional</option>
        <option value="Minimalist">Minimalist</option>
        <option value="Luxury">Luxury</option>
      </select>
    </div>
  );
}

export default StyleSelector;