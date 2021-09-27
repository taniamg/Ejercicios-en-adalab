const InputGroupText = (prop)=>{
    return (
        <div className="input-group-text">
  <label className="label-text" htmlFor="name">
    Escribe un nombre:
  </label>
  <input
    className="input-text"
    type="text"
    name={prop.name}
    id={prop.name}
    placeholder={prop.Maria Garcia}
    value={prop.name}
    onChange={prop.handleName}
  />
</div>;
    )
}



export default InputGroupTxt;
