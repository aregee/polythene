import m from "mithril";
import { filterSupportedAttributes } from "polythene-core";
import { svg } from "polythene-svg";
import { customTheme } from "./theme";

const classes = {
  icon: "pe-icon",
  avatar: "pe-icon--avatar",
  small: "pe-icon--small",
  regular: "pe-icon--regular",
  medium: "pe-icon--medium",
  large: "pe-icon--large"
};

const typeClasses = {
  small: classes.small,
  regular: classes.regular,
  medium: classes.medium,
  large: classes.large
};

const classForType = (mode = "regular") => typeClasses[mode];

const view = vnode => {
  const attrs = vnode.attrs;
  const element = attrs.element || "div";
  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      class: [
        classes.icon,
        classForType(attrs.type),
        attrs.avatar ? classes.avatar : null,
        attrs.class
      ].join(" "),
    },
    attrs.events ? attrs.events : null
  );
  const children = vnode.children.length && vnode.children || attrs.children;
  const content = attrs.content
    ? attrs.content
    : children && children[0]
      ? children
      : attrs.svg
        ? m(svg, {...attrs.svg})
        : attrs.msvg
          ? m(svg, attrs.msvg)
          : attrs.src
            ? m("img", {src: attrs.src})
            : null;
  return m(element, props, [attrs.before, content, attrs.after]);
};

export const icon = {
  theme: customTheme, // accepts (className, vars)
  view
};

