import React from "react";
import "./props.css";
const Props = () => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>head</td>
        <td>func / string</td>
        <td></td>
      </tr>
      <tr>
        <td>body</td>
        <td>func / string</td>
        <td></td>
      </tr>
      <tr>
        <td>footer</td>
        <td>func / string</td>
        <td></td>
      </tr>
      <tr>
        <td>classNames</td>
        <td>{"{ overlay: string, modal: string, closeIcon: string }"}</td>
        <td></td>
      </tr>
      <tr>
        <td>closeOnEscape</td>
        <td>bool</td>
        <td>true</td>
      </tr>
      <tr>
        <td>closeIcon</td>
        <td>{"{ src: string alt: string }"} </td>
        <td></td>
      </tr>
      <tr>
        <td>animation</td>
        <td>{"{ name: string duration: string }"}</td>
        <td>{"{ name: 'fade-in', duration: '500ms' }"}</td>
      </tr>
      <tr>
        <td>containerId</td>
        <td>number</td>
        <td></td>
      </tr>
      <tr>
        <td>modalId</td>
        <td>number</td>
        <td></td>
      </tr>
    </table>
  );
};

export default Props;
