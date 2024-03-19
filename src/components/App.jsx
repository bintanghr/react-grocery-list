import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

/* eslint-disable react/prop-types */
const groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 5,
    checked: true,
  },
  {
    id: 2,
    name: "Minyak",
    quantity: 2,
    checked: false,
  },
  {
    id: 3,
    name: "Teh",
    quantity: 5,
    checked: false,
  },
];

const App = () => {
  const [items, setItems] = useState(groceryItems);

  const handleAddItem = (item) => {
    // membuat array baru dari separate copy array "items"
    // menambahakan "item" ke array baru tersebut
    // baru akan dieksekusi setItems
    setItems([...items, item])
  }

  const handleDeleteItem = (id) => {
    // // jika yang argumennyya adalah item
    // var array = [...items]; // make a separate copy of the array
    // var index = array.indexOf(items)
    // if (index !== -1) {
    //   array.splice(index, 1);
    //   setItems(array);
    // }

    setItems((items) => items.filter(
      (item) => item.id !== id
    ))
  }

  const handleToggleItem = (id) => {
    // const newItems = [...items]
    // newItems[id-1].checked = !newItems[id-1].checked;

    // setItems(newItems);

    setItems((items) => items.map(
      (item) => item.id === id ? {...item, checked: !item.checked} : item
    ))
  }

  const handleClearItems = () => {
    setItems([]);
  }

  return (
    <>
      <div className="app">
        <Header />
        <Form onAddItem={handleAddItem} />
        <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
        <Footer items={items} />
      </div>
    </>
  );
};

export default App;