import React from 'react'
import old_fashioned from '../assets/old-fashioned.jpg'

const Grinding = () => {
  return (
    <div>
      <h1>Coffee Grinding</h1>
      <figure class="photo-right">
        <img src={old_fashioned} width="444" height="516" alt=""/>
        <figcaption>An old fashioned coffee grinder</figcaption>
      </figure>
      <p>The whole coffee beans are ground, also known as milling to facilitate the brewing process.</p>
      <p>
        The fineness of the grind strongly affects brewing. brewing methods that expose coffee grounds to heated water for longer requie a corser grind than faster brewing methods. bans that are too finely ground for the brewing method in which they are used will expose too muxh surface area to the heated water and produce a bitter, harsh, "over-extracted" taste. At the other extreme, an overly coarse grind will produce weak coffee unless more is used. Due to the importance of a grind's fineness, a uniform grind is highly desirable.
      </p>
      <p>
        If a brewing method is used in which the time of the ground coffee to the healed water is adjustable, the a short brewing time can be used for timely ground coffee. This produces coffee of equal flavor yet uses less ground coffee. A blade grinder does not cause frictional heat buildup in the ground coffee unless used to grind very large amounts as in a commercial operation. A fine grind allows the most effecient extraction but coffee ground too finely will slow down filtration or screening.
      </p>
      <p>
        Ground coffee deteriorates faster than roasted beans because of the greater surface area exposed to oxygen. Many coffee drinkers grind the beans themselves immediately before brewing.
      </p>
      <p>
        There are four methods of grinding coffee for brewing:
        <ul>
          <li>Burr-grinding</li>
          <li>Chopping</li>
          <li>pounding</li>
          <li>Roller grinding</li>
        </ul>
      </p>
    </div>
  )
}

export default Grinding