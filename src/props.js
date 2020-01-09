import React from "react";
import "./props.css";
const Props = () => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>head</td>
        <td>func / string</td>
        <td>null</td>
        <td>Modal heading</td>
      </tr>
      <tr>
        <td>body</td>
        <td>func / string</td>
        <td>null</td>
        <td>Modal body</td>
      </tr>
      <tr>
        <td>footer</td>
        <td>func / string</td>
        <td>null</td>
        <td>Modal footer</td>
      </tr>
      <tr>
        <td>classNames</td>
        <td>{"{ overlay: string, modal: string, closeIcon: string }"}</td>
        <td></td>
        <td>An object that defines classNames for overlay, modal and closeIcon</td>
      </tr>
      <tr>
        <td>closeOnEscape</td>
        <td>bool</td>
        <td>true</td>
        <td>Defines modal's closing condition on pressing ESCAPE key</td>
      </tr>
      <tr>
        <td>closeIcon</td>
        <td>{"{ src: string alt: string }"} </td>
        <td></td>
        <td>Custom close icon that takes icon's path and alt text</td>
      </tr>
      <tr>
        <td>animation</td>
        <td>{"{ name: string duration: string }"}</td>
        <td>{"{ name: 'fade-in', duration: '500ms' }"}</td>
        <td>Defines modal animation</td>
      </tr>
      <tr>
        <td>containerId</td>
        <td>number</td>
        <td></td>
        <td>Defines the if of the containerId where the modal will be mounted</td>
      </tr>
      <tr>
        <td>modalId</td>
        <td>number</td>
        <td></td>
        <td>Defines the modal container</td>
      </tr>
    </table>
  );
};

export default Props;
