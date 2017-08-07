import { pointerEndEvent, filterSupportedAttributes, isServer } from "polythene-core";
import { customTheme } from "./theme";
import animation from "./theme/animation";
import classes from "./classes";

export const getElement = vnode =>
  vnode.attrs.element || "div";

export const theme = customTheme;

export const getInitialState = () => {
  return {
    animations: {},
    animating: false,
    cleanUp: undefined
  };
};

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        attrs.constrained !== false ? classes.constrained : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" ")
    }
  );
};

const updateAnimationState = state =>
  state.animating = Object.keys(state.animations).length > 0;

export const onMount = vnode => {
  if (!vnode.dom && isServer) {
    return;
  }
  const state = vnode.state;
  const attrs = vnode.attrs;

  const tap = e => {
    if (attrs.disabled || (!attrs.multi && state.animating)) {
      return;
    }
    if (attrs.start) {
      attrs.start(e);
    }
    const id = `ripple_animation_${new Date().getTime()}`;
    state.animations[id] = animation({ e, id, el: vnode.dom, attrs, classes })
      .then(evt => {
        if (attrs.end) {
          attrs.end(evt);
        }
        delete state.animations[id];
        updateAnimationState(state);
      });
    updateAnimationState(state);
  };
  const triggerEl = attrs.target
    ? attrs.target
    : vnode.dom && vnode.dom.parentElement;
  
  triggerEl.addEventListener(pointerEndEvent, tap, false);
  state.cleanUp = () =>
    triggerEl.removeEventListener(pointerEndEvent, tap, false);
};

export const onUnMount = ({ state }) =>
  state.cleanUp && state.cleanUp();