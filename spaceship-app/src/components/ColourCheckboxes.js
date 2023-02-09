// Add a new prop to receive the selected checkboxes
const ColourCheckboxes = ({
  colours,
  handleChange,
  handleSelectAll,
  selectedColors,
}) => {
  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleSelectAll} />
        Select All
      </label>
      {colours.map(([value, label]) => (
        <label key={value}>
          <input
            type="checkbox"
            name={label}
            value={value}
            onChange={handleChange}
            checked={selectedColors[label] || false}
          />
          {label}
        </label>
      ))}
    </div>
  );
};

export default ColourCheckboxes;
