import React from 'react';

import close from '../assets/img/close.svg';

const Categories = (props) => {
  return (
    <div className="categories" style={props.isOpen ? { left: '-8px' } : { left: '-110%' }}>
      <img onClick={props.onClose} src={close} alt="close" />
      <ul>
        {props.categories.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                props.onChangeCategory(index);
                props.onClose();
              }}
              className={props.categoryId === index ? 'active' : ''}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
