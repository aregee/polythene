# Ripple

Adds a touch ripple effect to an element.

[Buttons](button.md) contain a ripple element by default. This component lets you add a ripple to other components.

<!-- MarkdownTOC autolink="true" autoanchor="true" bracket="round" levels="1,2,3" -->

- [Main features](#main-features)
- [Usage](#usage)
- [Options](#options)
  - [Ripple specific options](#ripple-specific-options)
  - [Ripple appearance options](#ripple-appearance-options)
  - [Common component options](#common-component-options)
- [Callback functions](#callback-functions)
- [CSS classes](#css-classes)

<!-- /MarkdownTOC -->


<a id="main-features"></a>
## Main features

* Set duration
* Set start and end opacity
* Set start and end scale
* Set color
* Customize animation
* Center ripple
* Transition ripple to persistent color fill
* Multiple simultaneous ripples
* Callback function when ripple has started and finished



<a id="usage"></a>
## Usage

* [Usage with Mithril](mithril/ripple.md)
* [Usage with React](react/ripple.md)



<a id="options"></a>
## Options


<a id="ripple-specific-options"></a>
### Ripple specific options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **start**     | optional | Function | | Callback function just before the ripple starts; see Callback functions |
| **end**       | optional | Function | | Callback function when the ripple has ended; see Callback functions |
| **disabled**  | optional | Boolean | false | Set to `true` to disable ripples |
| **multi**     | optional | Boolean | false | Set to `true` to enable multiple simultaneous ripples, instead of one after the other |


<a id="ripple-appearance-options"></a>
### Ripple appearance options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **unconstrained**           | optional | Boolean | false | Set to `true` to make the ripple shape no longer bound to the target element |   
| **center**                  | optional | Boolean | false | Set to `true` to start the ripple from the center |
| **duration**                | optional | Number | `1 / opacityDecayVelocity * 0.2` | The animation duration in seconds |
| **startOpacity**            | optional | Number | 0.2 | Opacity at the start of the ripple animation |
| **endOpacity**              | optional | Number | 0.0 | Opacity at the end of the ripple animation |
| **startScale**              | optional | Number | 0.1 | Scale at the start of the ripple animation |
| **endScale**                | optional | Number | 2.0 | Scale at the end of the ripple animation |
| **animationTimingFunction** | optional | String | "ease-out" | Name of animation function: "ease-in-out" or "cubic-bezier(0.1, 0.7, 1.0, 0.1)" |
| **opacityDecayVelocity**    | optional | Number | 0.4 | Velocity of decrease of opacity |
| **persistent**              | optional | Boolean | false | Set to `true` to keep the ripple at the end of the animation to make a persistent color fill |
| **target**                  | optional | HTML Element | the ripple's parent node element | The target defines which element responds to tap |


<a id="common-component-options"></a>
### Common component options

| **Parameter** |  **Required** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional | String | "div" | HTML element tag |
| **className** | optional | String |  | Extra CSS class appended to `pe-ripple` |
| **style**     | optional | Object |       | For setting simple style attributes |
| **id** | optional | String | | HTML element id |
| **tone**      | optional       | String: "dark" or "light" |  | Renders the component light on dark (sets class `pe-dark-tone`); use "light" to locally inverse (sets class `pe-light-tone`) |



<a id="callback-functions"></a>
## Callback functions

| **Function**     |  **Types**               |
| ---------------- | ------------------------ |
| **start** | `(MouseEvent) -> undefined`     |
| **end**   | `(AnimationEvent) -> undefined` |



<a id="css-classes"></a>
## CSS classes

* [Ripple classes](../../packages/polythene-css-classes/ripple.js)

