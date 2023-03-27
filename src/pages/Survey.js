import React from 'react'
import espresso from '../assets/tiny-coffee-cup.jpg'

const Survey = () => {
  return (
    <div>
      <h1>Coffee Survey</h1>
      <aside>
        <figure>
        <img src={espresso} alt='a cup of expresso' />
        </figure>
      </aside>
      <form action='' method='POST'>
      <fieldset> 
      <legend>Personal Information</legend>
      Your Name<br />
      <input type='text' name='name' required size='40'/><br />
      Email Address<br />
      <input type='email' name='email' placeholder='Enter valid email' required size='40'/><br />
      </fieldset>

      <fieldset>
      <legend>Your Coffee Preferences</legend>
      Tell us your coffee preparation methods<br />
      <textarea name='preparation' cols='40' rows='6'></textarea><br />
      <br />
      Do you grind your own beans?<br />
      <input type='radio' name='grind' value='yes' /> yes<br />
      <input type='radio' name='grind' value='no' />no <br />
      <br />
      How do you drink your coffee?<br />
      <input type='checkbox' name='drink' value='sugar' />with sugar<br />
      <input type='checkbox' name='drink' value='cream' />with cream<br />
      <br />
      What is your favorite coffee drink?<br />

      <select name='favorite'> 
      <option value=''>please select a drink</option>
      <option value='drip'>drip coffee</option>
      <option value='french'>french press</option>
      <option value='espresso'>espresso</option>
      <option value='latte'>latte</option>  
      <option value='flavored'>flavored</option> 
      </select>
      </fieldset>
      </form>
    </div>
  )
}

export default Survey