



function Cards(props) {
  return (
    <div className="cards-container">
      {/* <img src={props.image} alt="" />  */}
      <h2>{props.title} </h2>
      <button>Edit</button>
      <button>Remove</button>
    </div>
  );
}

export default Cards
