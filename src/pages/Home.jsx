import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Hamburger from '../components/Hamburger';

const Home = ({ searchValue }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isOpenHamburger, setIsOpenHamburger] = React.useState(false);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sort: 'rating',
  });

  const category = categoryId === 0 ? '' : `category=${categoryId}`;

  const findItems =
    searchValue !== ''
      ? items.filter((pizza) => pizza.title.toLowerCase().includes(searchValue.toLowerCase()))
      : items;

  React.useEffect(() => {
    setIsLoading(true);
    fetch(`https://6569c8a0de53105b0dd7a8a7.mockapi.io/items?${category}&sortBy=${sortType.sort}`)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [category, sortType]);

  return (
    <>
      <div className="content__top">
        <Hamburger onOpen={() => setIsOpenHamburger(true)} />
        <Categories
          categories={categories}
          categoryId={categoryId}
          onChangeCategory={(id) => setCategoryId(id)}
          isOpen={isOpenHamburger}
          onClose={() => setIsOpenHamburger(false)}
        />
        <Sort sortType={sortType} onChangeSort={(obj) => setSortType(obj)} />
      </div>
      <h2 className="content__title">{categories[categoryId]}</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : findItems.map((pizza) => {
              return (
                <PizzaBlock
                  key={pizza.id}
                  sizes={pizza.sizes}
                  title={pizza.title}
                  price={pizza.price}
                  img={pizza.imageUrl}
                  types={pizza.types}
                />
              );
            })}
      </div>
    </>
  );
};

export default Home;
