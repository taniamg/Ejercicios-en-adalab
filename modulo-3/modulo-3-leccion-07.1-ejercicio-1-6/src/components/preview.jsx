const Preview = (props) => {
  const renderPaymentTypeText = (props) => {
    if (props.paymentType === "creditCard") {
      return "Tarjeta de crédito";
    } else if (props.paymentType === "cash") {
      return "Efectivo";
    } else if (props.aymentType === "cashOnDelivery") {
      return "Contra reembolso";
    }
  };
  return (
    <div className="preview">
      <h2>Tus datos son:</h2>
      <ul>
        <li>Nombre: {props.name}</li>
        <li>Email: {props.email}</li>
        <li>Región: {props.region}</li>
        <li>Método de pago: {props.paymentType}</li>
        <li>
          Has aceptado nuestros términos legales:{" "}
          {props.legalTerms === true ? "Sí" : "No"}
        </li>
      </ul>
    </div>
  );
};

export default Preview;
