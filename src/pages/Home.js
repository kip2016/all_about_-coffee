import React from 'react'
import { Link } from 'react-router-dom'
import tiny_cup from '../assets/tiny-coffee-cup.jpg'

const Home = () => {
  return (
    <div>
    <h1> All About Coffee </h1>
    <aside>
      <blockquote>We want to do alot of stuff. we're not in great shape. We didn't get a good night sleep. We're a little depressed. Coffee solves all these problems in in one delightful little cup.</blockquote>
      -Jerry Seinfeld
    </aside>

    <section> 
      <img class="photo-left" src={tiny_cup} alt="a cup of coffee" width="128" height="128" />
      <p>coffee preparation is the process of turning coffee bears into a beverage. While the particular step vary with the type of coffee and with the raw materials, the process includes four basic steps; raw coffee beans must be <Link to="/roast">roasted</Link>, the roasted coffee beans must then be <Link to="/grind">ground</Link>, the ground coffee must then be mixed with hot waterfor certain time(<Link to="/brew">brewed</Link>), and finally the liquid coffee must be separated from the used grounds.</p>

      <p>Coffee is usually brewed immediately before drinking in most areas, coffee may be purchased unprocessed, or already roasted, or already roasted and grounded. Coffee is often vacuum packed to prevent oxidation and lengthen its shelf life.</p>

      <p>To learn more about coffee, just browse our informative site, or you can visit <Link to='http://en.wikipedia.org/wiki/Coffee_preparation'> wikipedia</Link> for even more.</p>
    </section>
    </div>
  )
}

export default Home