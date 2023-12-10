import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Hamburger from '../components/Hamburger';
import { useSelector } from 'react-redux';
import { SearchContext } from '../App';

const Home = () => {
  const { searchInput } = React.useContext(SearchContext);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.sort.sortType);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isOpenHamburger, setIsOpenHamburger] = React.useState(false);

  const category = categoryId === 0 ? '' : `category=${categoryId}`;

  const findItems =
    searchInput !== ''
      ? items.filter((pizza) => pizza.title.toLowerCase().includes(searchInput.toLowerCase()))
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
          isOpen={isOpenHamburger}
          onClose={() => setIsOpenHamburger(false)}
        />
        <Sort />
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
