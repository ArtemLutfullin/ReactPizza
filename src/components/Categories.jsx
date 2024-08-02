import React from 'react';

function Categories() {
  const [activeCategory, setActiveCategory] =
    React.useState(0); /*изначально выбрана категория 0- все*/

  const categories = ['Всё', ' Мясные ', ' Вегетарианская ', 'Гриль', 'Острые', 'Закрытые'];

  const OnClickCategory = (indexCategory) => {
    setActiveCategory(indexCategory);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => OnClickCategory(index)}
            className={activeCategory === index ? 'active' : ''}>
            {' '}
            {value}{' '}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
