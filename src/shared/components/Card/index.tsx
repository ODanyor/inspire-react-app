import React, { useRef, useEffect } from 'react';
import { Button } from 'shared/components';
import { CardProps } from 'shared/interfaces';
import './card.sass';

const Card: React.FC<CardProps> = ({ item, activeCard, setActive }) => {
  const cardBgRef = useRef<HTMLDivElement>(null);
  const isActive: boolean = activeCard === item;
  const item_class = isActive ? 'card card_active' : 'card';

  useEffect(() => {
    cardBgRef.current!.style.transform = isActive ? `translateY(0)` : `translateY(100%)`;
  }, [cardBgRef, isActive]);

  return (
    <Button className={item_class} onClick={() => setActive(item)}>
      <div className='card__title'>{item.body.title}</div>
      <div className='card__content'>{item.body.content}</div>
      <div className='card__background' ref={cardBgRef}></div>
    </Button>
  );
}

export default Card;
