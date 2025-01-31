import './scss/app.scss';
import Header from './components/Header.jsx';
import Sort from './components/Sort.jsx';
import Categories from './components/Categories.jsx';
import PizzaBlock from './components/PizzaBlock.jsx';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />

        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items"></div>
            <PizzaBlock title="Мексиканская" price={450} />
            <PizzaBlock title="Пеперони" price={395} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
