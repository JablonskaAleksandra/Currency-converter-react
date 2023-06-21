// import React, { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import Amount from "./Amount";

function App() {
  return (
    <Container>
      <Header title="💰 Kalkulator walut 💰" />
      <Form
        label="Wybierz walutę"
        currencySelection={<Select />}
        input={<Input />}
        button={<Button />}
        amount={<Amount />}
      />
    </Container>
  );
}

export default App;
