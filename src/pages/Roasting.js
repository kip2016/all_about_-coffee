import React from 'react'
import unpicked_beans  from '../assets/unpicked coffee-beans.jpg'
import fresh_coffee from '../assets/Fresh coffee berries.jpg'
import roasted from '../assets/roasted-coffee.jpg'
import commercial_roster from '../assets/commercial-roaster.jpg' 

const Roasting = () => {
  return (
    <div>
      <h1>Coffee Roasting</h1>
      <aside> 
      <figure class="photo-right">
        <img src={unpicked_beans}width='100' height="100"alt="unpicked coffee berries" />
        <figcaption>Unpicked coffee berries</figcaption>
        <img src={fresh_coffee}width='100' height="100" alt="Fresh coffee berries" />
        <figcaption>Fresh coffee berries</figcaption>
        <img src={roasted} width='100' height="100"alt="Roasted coffee beans" />
        <figcaption>Roasted coffee beans</figcaption>
      </figure>
      </aside>

      <section> 
      <figure>
        <img src={commercial_roster} width='300' height="100"alt="Roasted coffee beans" />
        <figcaption>
          Commercial coffee roaster
        </figcaption>
      </figure>
      
      <p>
        Roasting coffee transform the chemical and physical properties of green coffee beans. When roasted the green coffee beans expand to nearly double its size, changing in color and density. As the beans observe heat, its color shifts to yellow, then to light 'cinnamon' brown, and then to a rich brown color. During roasting oils appear on the surface of the bean. The roast will continue to darken until it is removed from the heat source.
      </p>
      <p>
        Coffee can be roasted with ordinary kitchen equipment(frying pan, grill,oven, popcorn popper) or by specialized appliances. A coffee roaster is a special or apparatus suitable to heat up and roast green Coffee beans.
      </p>
      <p>
        The vast majority of coffee is roasted commercially on a large scale,but small-scale commercial roasting as grown significally with the trend towards 'single-origin' coffee served at speciality shops. Some coffee drinkers even roast coffee at home as a hobby in order to both experiment with the flavor profile of the beans and ensure themselves of the freshest possible roast.
      </p>
      </section>
    </div>
  )
}

export default Roasting