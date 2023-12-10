import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onChangeCategory } from '../redux/slices/filterSlice';

import close from '../assets/img/close.svg';

const Categories = (props) => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();
  return (
    <div className="categories" style={props.isOpen ? { left: '-8px' } : { left: '-110%' }}>
      <img onClick={props.onClose} src={close} alt="close" />
      <ul>
        {props.categories.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                dispatch(onChangeCategory(index));
                props.onClose();
              }}
              className={categoryId === index ? 'active' : ''}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
