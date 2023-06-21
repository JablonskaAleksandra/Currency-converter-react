import "./style.css";

const Select = () => (
  <select className="select" name="selectCurrency">
    <option value="EUR">EUR</option>
    <option value="GBP">GBP</option>
    <option value="USD">USD</option>
    <option value="CHF">CHF</option>
  </select>
);

export default Select;

// Tutaj w opcjach później podstawić elementy z tablicy walut
