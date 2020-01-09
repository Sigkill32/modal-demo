import React from 'react';
import './props.css'

const ComponentModeProps = () => {
    return ( 
        <table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>open</td>
    <td>bool</td>
    <td></td>
    <td>Control if the modal is open or not.</td>
  </tr>
  <tr>
    <td>onClose</td>
    <td>func</td>
    <td></td>
    <td>Callback fired when the Modal is closed irrespective of the event that led the closing of the modal</td>
  </tr>
</table>
     );
}
 
export default ComponentModeProps;