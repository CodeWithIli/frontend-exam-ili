import React from 'react';
import {InView} from 'react-intersection-observer';
import Image from './Image';

export const AsyncImage = ({className, imgSrc, imgAltTxt, style}) => {
  return (
    <InView triggerOnce>
      {({ref, inView}) => (
        <div ref={ref}>
          <Image style={style} className={className} imgSrc={imgSrc} imgAltTxt={imgAltTxt} inView={inView} />
        </div>
      )}
    </InView>
  )
}

