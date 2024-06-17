import PropTypes from 'prop-types';

function List(props) {
    // const fruits = [{id: 1, name: "apple", calories: 95},
    //                 {id: 2, name:"orage", calories: 45}, 
    //                 {id: 3, name:"banana", calories: 105}, 
    //                 {id: 4, name:"coconut", calories: 159}];


                    //Organizando a  lista a cima em:
    // fruits.sort((a, b) => a.name.localeCompare(b.name))//- Ordem Alfabetica
    // fruits.sort((a, b) => b.name.localeCompare(a.name))//- O Contrario da Ordem Alfabetica
    //fruits.sort((a, b) => a.calories - b.calories); //Ordem Numerica
    //fruits.sort((a, b) => b.calories - a.calories); //Contrario da ordem numerica




    //const lowCalFruits = fruits.filter(fruit =>  fruit.calories < 100); //Todas as frutas que estão com as calorias ABAIXO de 100
    //const highCalFruits = fruits.filter(fruit =>  fruit.calories >= 100)//Todas as frutas que estão com as calorias ACIMA de 100
    //const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>{highCalFruit.name} : &nbsp; <strong>{highCalFruit.calories}</strong></li>);

    const itemList = props.items;
    const category = props.category;


    const listItems = itemList.map(item => <li key={item.id}>{item.name} : &nbsp; <strong>{item.calories}</strong></li>);


    return (<>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items" >{listItems}</ol>
            </>);
}
List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape( {id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number} ))
}

List.defaultProps = {
    category: "category",
    items: []
}
export default List