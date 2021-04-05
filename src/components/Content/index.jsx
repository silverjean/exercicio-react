import React from 'react';

import { Div, DivR } from './style';

export default function Content({ imgRigth, title, content, img }) {
  return (
    <>
      {imgRigth ? (
        <Div>
          <div className='content'>
            <h2>{title}</h2>
            {content}
          </div>

          <img src={img} alt='' />
        </Div>
      ) : (
        <DivR>
          <div className='content'>
            <h2>{title}</h2>
            {content}
          </div>
          <img src={img} alt='' />
        </DivR>
      )}
    </>
  );
}
