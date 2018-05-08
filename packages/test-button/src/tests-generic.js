import { ButtonCSS } from "polythene-css";

export default ({ renderer: h, Button }) => {
  
  ButtonCSS.addStyle(".tests-button-themed-button", {
    color_light_background: "#2196F3",
    color_dark_background:  "#2196F3",
    color_light_text:       "#fff"
  });

  ButtonCSS.addStyle(".blue-on-dark-Button", {
    color_dark_text: "#2196F3"
  });

  ButtonCSS.addStyle(".tests-button-bordered-button", {
    color_light_text:   "#673ab7",
    color_light_border: "#673ab7",
    color_dark_text:    "yellow",
    color_dark_border:  "yellow"
  });

  ButtonCSS.addStyle(".tests-button-hover-button", {
    color_light_hover:            "#fff",
    color_light_hover_background: "#673ab7",
    animation_duration:           "100ms",
  });
  
  return [
    {
      name: "Option: label",
      component: Button,
      attrs: {
        label: "Label"
      }
    },
    {
      name: "Button row",
      component: {
        view: () => 
          h(".pe-button-row",
            [
              h(Button, {
                key: "one", // for React
                label: "One"
              }),
              h(Button, {
                key: "two", // for React
                label: "Two"
              }),
              h(Button, {
                key: "three", // for React
                label: "Three"
              })
            ]
          )
      }
    },
    {
      name: "Themed Button (colors)",
      component: Button,
      attrs: {
        label: "Themed Button",
        className: "tests-button-themed-button"
      }
    },
    {
      name: "Themed Button: (option: border)",
      component: Button,
      attrs: {
        label: "Border",
        className: "tests-button-bordered-button",
        border: true
      }
    },
    {
      name: "Themed Button (hover)",
      component: Button,
      interactive: true,
      attrs: {
        label: "Hover Button",
        className: "tests-button-hover-button"
      }
    },
    {
      name: "Option: style (colors)",
      component: Button,
      attrs: {
        label: "Styled",
        style: {
          backgroundColor: "#EF6C00",
          color: "#fff"
        }
      }
    },
    {
      name: "Option: wash (false)",
      interactive: true,
      component: Button,
      attrs: {
        label: "No wash",
        wash: false
      }
    },
    {
      name: "Option: ink (false)",
      interactive: true,
      component: Button,
      attrs: {
        label: "No ink",
        ink: false
      }
    },
    {
      name: "Option: ripple",
      interactive: true,
      component: Button,
      attrs: {
        label: "Custom ripple",
        ripple: {
          endOpacity: 1,
          persistent: true,
          style: {
            color: "#2196F3"
          }
        }
      }
    },
    {
      name: "Option: selected",
      component: Button,
      attrs: {
        label: "Selected",
        selected: true
      }
    },
    {
      name: "Option: dropdown with label (not interactive)",
      component: Button,
      attrs: {
        label: "Dropdown",
        dropdown: true
      }
    },
    {
      name: "Split button",
      component: {
        view: () => 
          h(".pe-split-button", [
            h(Button, {
              label: "Left"
            }),
            h(Button, {
              dropdown: true
            })
          ])
      },
    },
    {
      name: "Option: dropdown without label (not interactive)",
      component: Button,
      attrs: {
        dropdown: true
      }
    },
    {
      name: "Option: formaction",
      component: Button,
      attrs: {
        label: "Form action",
        formaction: "http://polythene.js.org"
      }
    },
    {
      name: "Option: inactive (false)",
      interactive: true,
      component: Button,
      attrs: {
        label: "Not inactive",
        inactive: false
      }
    },
    {
      name: "Option: inactive (true)",
      interactive: true,
      component: Button,
      attrs: {
        label: "Inactive",
        inactive: true
      }
    },
    {
      name: "Option: inactivate (2)",
      interactive: true,
      component: Button,
      attrs: {
        label: "Inactivated for 2s",
        inactivate: 2
      }
    },

    // Dark tone class
    
    {
      name: "Option: label -- dark tone class",
      className: "pe-dark-tone",
      component: Button,
      attrs: {
        label: "Label"
      }
    },
    {
      name: "Option: tone \"dark\" -- dark tone class",
      className: "test-dark-tone",
      component: Button,
      attrs: {
        label: "Label",
        tone: "dark"
      }
    },
    {
      name: "Themed Button -- dark tone class",
      className: "pe-dark-tone",
      component: Button,
      attrs: {
        label: "Themed Button",
        className: "tests-button-themed-button"
      }
    },
    {
      name: "Themed Button blue on dark -- dark tone class",
      className: "pe-dark-tone",
      component: Button,
      attrs: {
        label: "Blue on dark Button",
        className: "blue-on-dark-Button"
      }
    },
    {
      name: "Themed Button: (option: border) -- dark tone class",
      className: "pe-dark-tone",
      component: Button,
      attrs: {
        label: "Border dark tone",
        className: "tests-button-bordered-button",
        border: true
      }
    },
  ];
};

