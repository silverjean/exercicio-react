import React from 'react';

import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { GiPapers } from 'react-icons/gi';
import { GiConfirmed } from 'react-icons/gi';

import { Section } from './style';

export default function Navbar() {
  return (
    <Section>
      <div className='items'>
        <AiOutlineFundProjectionScreen className='icons' />
        <h3>Somente para desktop</h3>
        <span>Lorem ipsum dolor sit amet.</span>
      </div>
      <div className='items'>
        <GiPapers className='icons' />
        <h3>Criado com componentes</h3>
        <span>Lorem, ipsum dolor.</span>
      </div>
      <div className='items'>
        <GiConfirmed className='icons' />
        <h3>Facil aproveitamento</h3>
        <span>Lorem ipsum dolor sit.</span>
      </div>
    </Section>
  );
}
