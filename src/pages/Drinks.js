import React from 'react'

const Drinks = () => {
  return (
    <div>
    <h1>Coffee Drinks</h1>
    <video controls>
     <source src='' />
    </video>
    <table>
      <caption>Popular Coffee Drinks</caption>
      <thead> 
        <tr>
        <th>Drinks</th> 
        <th>Preparation</th> 
        <th>Temperature</th>
        <th>Ingredients</th>
        <th>Details</th>
        </tr>
      </thead>
      <tbody> 
        <tr>    
          <td>Cappuccino</td>
          <td>Expresso</td>
          <td>Hot </td>
          <td>Equal amount of espresso and steamed milk</td>
          <td>Pour the espresso through the milk and serve</td>
        </tr>

        <tr>
          <td>Latte</td> 
          <td>Espresso </td>
          <td>Hot</td> 
          <td>2/3 or more steamed milk and espresso</td> 
          <td>Pour the espresso through the milk and serve.</td>
        </tr> 
        <tr>
          <td>Macchiato</td> 
          <td>Espresso</td> 
          <td>Hot</td> 
          <td>Espresso with just a "mark" of steamed milk</td>  
          <td>Add milk to the espresso after pressing. </td> 
        </tr>
        <tr>
          <td>Iced Coffee</td> 
          <td>Drip or french press</td> 
          <td>Cold</td> 
          <td>Coffee poured over ice Can be sweetened with</td> 
          <td>sugar or creme.</td> 
        </tr>

        <tr>
          <td>Frappe</td> 
          <td>Strong instant coffee</td> 
          <td>Cold </td>
          <td>Instant coffee, water and milk</td> 
          <td>Shake to create a foam, then pour over ice and serve. A speciality in Greece </td>
        </tr>

        <tr>  
          <td>Flat white </td>
          <td>Espresso</td> 
          <td>Hot</td> 
          <td>1/3 espresso and 2/3 steamed milk</td> 
          <td>A speciality in Australia and New Zealand. The foam is often decorated with a motif.</td>
        </tr>
      </tbody>
    </table>
 
    </div>
  )
}

export default Drinks