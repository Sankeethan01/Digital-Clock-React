

const List = (props) => {
  
    const fruitList = props.list;
   

   const listItem = fruitList.map(fruitList => <li key={fruitList.id}>{fruitList.name}</li>)

    return (
        <>
        <h1>{props.category}</h1>
         <ol>{listItem}</ol>
        </>
       
    )
  
}


export default List