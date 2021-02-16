const Article1 = (props) => {
  return (
    <div>
      <div className="imageText">
        <img src={props.image} className="letters" alt="letter image" />

        <p>Here is letter {props.alph}</p>
      </div>
    </div>
  );
};

export default Article1;
