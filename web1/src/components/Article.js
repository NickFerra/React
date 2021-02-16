



const Article = (props) =>{
    return(
      
      
      <div className = "imageText">
  
        <img src = {props.image} className ="letters" alt = "letter image"/>
        
        <p>Here is letter {props.alph}</p> 
        
      </div>
    );
}

export default Article;
