import { StateComponent, renderer as h } from "polythene-mithril-base";
import { Conditional } from "polythene-core";
import { coreMaterialDesignSpinner as core } from "polythene-core-spinner";
import { BaseSpinner } from "../base";

const SpinnerInstance = StateComponent(Object.assign(
  {},
  core,
  { component: BaseSpinner }
));

const SpinnerToggle = StateComponent(Conditional);
SpinnerToggle.displayName = "SpinnerToggle";

export const MaterialDesignSpinner = {
  view: vnode =>
    h(SpinnerToggle, Object.assign({},
      vnode.attrs,
      {
        placeholderClassName: BaseSpinner.classes.placeholder,
        instance: SpinnerInstance
      }
    ))
};

MaterialDesignSpinner.theme = core.theme;
MaterialDesignSpinner.classes = core.classes;
MaterialDesignSpinner.displayName = "MaterialDesignSpinner";