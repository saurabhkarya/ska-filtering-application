import "./FormStyles.css";

const ColourCheckboxes = ({
  colours,
  handleChange,
  handleSelectAll,
  selectedColors,
}) => {
  return (
    <div className="FormSection">
      <h2>What colour would you like?</h2>
      <section className="CheckboxSection">
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
        <label>
          <input type="checkbox" onChange={handleSelectAll} />
          Select All/None
        </label>
      </section>
    </div>
  );
};

export default ColourCheckboxes;
