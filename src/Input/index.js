import "./style.css";

const Input = () => (
  <p className="input">
    <input
      className="input__content"
      required
      type="number"
      step="any"
      min="0.1"
      name="ConvertFrom"
      placeholder="Wpisz kwotę"
    />
  </p>
);

export default Input;
