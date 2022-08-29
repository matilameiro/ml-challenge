import { ReactNode } from 'react';
import style from './card.module.scss';

type Props = {
  children: ReactNode;
}

const Card = ({children}: Props) => {
  return (
    <div className={style.card}>{children}</div>
  )
}

export default Card;
