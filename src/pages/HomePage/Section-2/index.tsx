import React from 'react';
import Section from '../Section';
import { useHandleValue } from 'shared/hooks';

import './styles.sass';

const cards = [
  {
    header: {
      title: 'Open your hidden skills',
      content: 'Meditate content text ...'
    },
    body: {
      title: 'Meditate',
      content: 'Body content text ...'
    }
  },
  {
    header: {
      title: 'Explore undefined',
      content: 'Learn content text ...'
    },
    body: {
      title: 'Learn',
      content: 'Body content text ...'
    }
  },
  {
    header: {
      title: 'Train mental',
      content: 'Train content text ...'
    },
    body: {
      title: 'Train mind',
      content: 'Body content text ...'
    }
  },
];

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
  const item_class = activeCard === item ? 'card__body_active' : 'card__body';

  return (
    <button className={item_class} onClick={() => setActive(item)}>
      <div className='card__body__title'>{item.body.title}</div>
      <div className='card__body__content'>{item.body.content}</div>
    </button>
  );
}

const Section2: React.FC = () => {
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
    </div>
  );
}

export default Section(Section2);
