import React from 'react';
import {Container, SpanOne, Wide, ImageNearby, Para_nearby, Dot,Bold, Dott} from './style.jsx'

const Nearbyhomestwo = ({images, address}) => (

<Container className = 'nearbyhomes'>

<SpanOne >
  <ImageNearby src = {images[0]} />
  <Para_nearby>
<Bold> {'$1,577,876'} <Dot></Dot></Bold>
{`355 Bryant St Unit 209, San Francisco, CA 94107`}
<div>{` 1 bd  `}<Dott></Dott>{` 1ba  `}<Dott></Dott>{` 2k sqft`} </div>
  </Para_nearby>
</SpanOne>

<Wide></Wide>
<SpanOne>
  <ImageNearby src = {images[0]} />
  <Para_nearby>
   <Bold> {'$1,633,946'} <Dot></Dot></Bold>
{`674 San Antonio St 209, San Francisco, CA 94107`} 

<div>{` 1 bd  `} <Dott></Dott> {` 1ba  `} <Dott></Dott>{` 1.5k sqft`}</div>
  </Para_nearby>
</SpanOne>

<Wide></Wide>

</Container>
)

export default Nearbyhomestwo;

