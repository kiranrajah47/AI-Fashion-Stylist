function OccasionSelector({ occasion, setOccasion }) {
  return (
    <div className="selector-container">
      <label>Occasion</label>

      <select
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="">Select Occasion</option>
        <option value="Wedding">Wedding</option>
        <option value="Party">Party</option>
        <option value="Office">Office</option>
        <option value="Casual">Casual</option>
        <option value="Festival">Festival</option>
        <option value="College">College</option>
      </select>
    </div>
  );
}

export default OccasionSelector;