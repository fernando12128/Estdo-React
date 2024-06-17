// import Header from './Header'
// import Footer from './Footer'
// import Food from './Food'
// import Card from './Card';
// import Button from './Button'
// import Student from "./Student";
// import UserGreeting from "./UserGreeting";
import List from "./List"

function App() {
    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name:"orage", calories: 45}, 
                    {id: 3, name:"banana", calories: 105}, 
                    {id: 4, name:"coconut", calories: 159}];

    const vegetables = [{id: 5, name: "potatoes", calories: 110},
                        {id: 6, name:"celery", calories: 15}, 
                        {id: 7, name:"carrots", calories: 25}, 
                        {id: 8, name:"corn", calories: 63}];


  return(
    <>
    {/* <Header/>*/}
    {/*<Food/>*/}
    {/*<Footer/>*/}
    {/*<Card/>*/}
    {/* <Button/>*/}
    {/*<Student name="Spongebob" age={30} isStudent={true} /> */}
    {/* <UserGreeting isLoggedIn={true} username="Fernando"/> */}

    {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
    {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    </>
  );
}

export default App
