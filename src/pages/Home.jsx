import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

import Categories from '../components/Categories';
import Sort, { listPopup } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Hamburger from '../components/Hamburger';
import { SearchContext } from '../App';
import { setSortType } from '../redux/slices/sortSlice';
import { setCategoryId } from '../redux/slices/filterSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.sort.sortType);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isOpenHamburger, setIsOpenHamburger] = React.useState(false);
  const { searchInput } = React.useContext(SearchContext);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const category = categoryId === 0 ? '' : categoryId;

  const findItems =
    searchInput !== ''
      ? items.filter((pizza) => pizza.title.toLowerCase().includes(searchInput.toLowerCase()))
      : items;

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = listPopup.find((obj) => obj.sort === params.sort);

      dispatch(setCategoryId(params));
      dispatch(setSortType(sort));
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    if (!isSearch.current) {
      setIsLoading(true);
      axios
        .get(
          `https://6569c8a0de53105b0dd7a8a7.mockapi.io/items?category=${category}&sortBy=${sortType.sort}&search=${searchInput}`,
        )
        .then((res) => {
          setItems(res.data);
          setIsLoading(false);
        });
    }
    isSearch.current = false;
  }, [category, sortType, searchInput]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sort: sortType.sort,
        category,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
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
                  id={pizza.id}
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
