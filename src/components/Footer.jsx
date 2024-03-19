/* eslint-disable react/prop-types */
const Footer = ({ items }) => {
  if (items.length === 0) return <footer className="stats">Daftar Belanjaan Masih Kosong!</footer>
  const totalItems = items.length;
  const checkedItems = items.filter(
    (item) => item.checked
  ).length;
  const precentage = Math.round((checkedItems / totalItems) * 100);
  
  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({precentage}%)
    </footer>
  );
};

export default Footer