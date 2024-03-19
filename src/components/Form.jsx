/* eslint-disable react/prop-types */
import { useState } from "react";

const Form = ({ onAddItem }) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)

  const handleSubmit = (e) => {
    // mengatasi web reload saat form submit, agar developer lebih leluasa pada kendali web
    e.preventDefault();

    if(!name) return;

    // jika nama properti dan value sama, maka bisa ditulis satu saja, tidak perlu name: name
    const newItem = { name, quantity, checked: false, id: Date.now() };
    onAddItem(newItem);

    console.log(newItem);

    setName('');
    setQuantity(1);
  }

  // menggunakan 'map' akan menjadi lebih deklaratif, dan efisien kode jika dibandingkan dengan menggunakan array biasa 
  const quantityNum = [...Array(20)].map((_, i) => {
    return (
      <option value={i+1} key={i+1}>
        {i+1}
      </option>
    )
  })

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {quantityNum}
        </select>
        {/* mengatasi form tidak bisa diisi jika ditambahkan atribut 'value' (yang mana state name = '')
            anonymous function untuk mengatasi 'e' undefined */}
        <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} />
        <button>Tambah</button>
      </div>
    </form>
  );
};

export default Form