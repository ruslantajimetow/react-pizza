import React from 'react';

export const PizzaBlock = (props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeType, setActiveType] = React.useState(0);
  const { title, price, sizes, img, types } = props;

  const onClickSize = (index) => {
    setActiveIndex(index);
  };

  const onClicActiveType = (index) => {
    setActiveType(index);
  };
  return (
    <div className="pizza-root">
      <div className="pizza-block">
        <img className="pizza-block__image" src={img} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type, i) => {
              return (
                <li
                  onClick={() => onClicActiveType(i)}
                  key={i}
                  className={activeType === i ? 'active' : ''}>
                  {type === 0 ? 'Тонкое' : 'Традиционное'}
                </li>
              );
            })}
          </ul>
          <ul>
            {sizes.map((size, i) => {
              return (
                <li
                  onClick={() => onClickSize(i)}
                  key={i}
                  className={activeIndex === i ? 'active' : ''}>
                  {size}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <div className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>2</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
