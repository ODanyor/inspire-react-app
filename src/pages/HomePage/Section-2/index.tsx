import React from 'react';
import Section from '../Section';
import { useHandleValue } from 'shared/hooks';
import './styles.sass';

const cards = [
  {
    header: {
      title: 'Open your hidden skills',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    body: {
      title: 'Meditate',
      content: 'Body content text ...'
    }
  },
  {
    header: {
      title: 'Explore undefined',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    body: {
      title: 'Learn',
      content: 'Body content text ...'
    }
  },
  {
    header: {
      title: 'Train mental',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
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
  const item_class = activeCard === item ? 'card__body card__body_active' : 'card__body';

  return (
    <button className={item_class} onClick={() => setActive(item)}>
      <div className='card__body__title'>{item.body.title}</div>
      <div className='card__body__content'>{item.body.content}</div>
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
