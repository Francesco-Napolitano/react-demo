const MainComponent = function(props){
   return (
      <section className={props.color}>
         <h3>Componente REACT creato da me</h3>
         <p>Benvenuto {props.student}</p>
      </section>
   )
}


// const sum = (n1,n2) =>{
//    return n1 + n2
   
// }

export default MainComponent
