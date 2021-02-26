import React, { useRef, useEffect } from 'react';
import Section from '../Section';
import { useHandleValue } from 'shared/hooks';
import { cards } from 'shared/assets/content';
import './styles.sass';

interface TitleAndContent {
  title: string;
  content: string;
}

interface CardInterface {
  item: {
    header: TitleAndContent;
    body: TitleAndContent;
  };
  activeCard: any;
  setActive: any;
}

const Card: React.FC<CardInterface> = ({ item, activeCard, setActive }) => {
  const cardBgRef = useRef(null);
  const isActive: boolean = activeCard === item;
  const item_class = isActive ? 'card__body card__body_active' : 'card__body';

  useEffect(() => {
    if (cardBgRef) {
      // @ts-ignore
      cardBgRef.current.style.transform = isActive ? `translateY(0)` : `translateY(100%)`;
    }
  }, [cardBgRef, isActive]);

  return (
    <button className={item_class} onClick={() => setActive(item)}>
      <div className='card__body__title'>{item.body.title}</div>
      <div className='card__body__content'>{item.body.content}</div>
      <div className="card__body__background" ref={cardBgRef}></div>
    </button>
  );
}

const Section2: React.FC<{ setSection: any }> = ({ setSection }) => {
  const activeCard = useHandleValue(cards[0]);
  const { title, content } = activeCard.controls.value.header;

  return (
    <div className='card__container'>
      <div className='card__header'>
        <div className='card__header__title'>{title}</div>
        <div className='card__header__content'>{content}</div>
      </div>

      <div className='card__list'>
        {cards.map((card, index) => (
          <Card
            key={index}
            item={card}
            activeCard={activeCard.controls.value}
            setActive={activeCard.setValue} />
        ))}
      </div>

      <div className="card__button">
        <button onClick={() => setSection(2)}>Got it</button>
      </div>
    </div>
  );
}

export default Section(Section2);
