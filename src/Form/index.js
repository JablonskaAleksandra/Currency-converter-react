import "./style.css";

const Form = ({ label, currencySelection, input, button, amount }) => (
  <form>
    <fieldset className="form">
      <label>
        <h2 className="form__label">{label}</h2>
      </label>
      {currencySelection}
      {input}
      {button}
      <p className="form__paragraph">
        Kwota, którą otrzymujemy wynosi {amount} PLN
      </p>
    </fieldset>
  </form>
);

export default Form;
