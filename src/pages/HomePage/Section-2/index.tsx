import React from 'react';
import { Button, Card } from 'shared/components';
import { WithSection } from 'shared/hocs';
import { useHandleValue } from 'shared/hooks';
import { CardInterface, SectionProps } from 'shared/interfaces';
import { cards } from 'shared/assets/context';
import './styles.sass';

const Section2: React.FC<SectionProps> = ({ setSection }) => {
  const activeCard = useHandleValue<CardInterface>(cards[0]);
  const { title, content } = activeCard.controls.value.header;

  return (
    <div className='card-container'>
      <div className='card-container__header'>
        <div className='card-container__title'>{title}</div>
        <div className='card-container__content'>{content}</div>
      </div>

      <div className='card-list'>
        {cards.map((card: CardInterface, index) => (
          <Card
            key={index}
            item={card}
            activeCard={activeCard.controls.value}
            setActive={activeCard.setValue} />
        ))}
      </div>

      <div className='link-button'>
        <Button onClick={() => setSection(2)}>Got it</Button>
      </div>
    </div>
  );
}

export default WithSection(Section2);
