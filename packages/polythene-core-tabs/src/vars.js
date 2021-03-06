import { vars } from "polythene-theme";
import { vars as buttonVars } from "polythene-core-button";
import { vars as iconButtonVars } from "polythene-core-icon-button";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;

const fontSize = buttonVars.font_size;
const tab_label_line_height = 1.1 * fontSize;
const tab_height = 48;
const scroll_button_size = tab_height;

export default {
  animation_duration:               buttonVars.animation_duration,
  indicator_slide_min_duration:     .250,
  indicator_slide_speed:            600, // px per second
  label_max_width:                  264,
  menu_tab_height:                  44,
  menu_tab_icon_label_height:       44,
  scroll_button_fade_delay:         .25,
  scroll_button_fade_duration:      .2,
  scroll_button_opacity:            .7,
  scroll_button_size,
  scrollbar_offset:                 20,
  tab_content_padding_v:            12,
  tab_height,
  tab_icon_label_height:            72,
  tab_icon_label_icon_spacing:      7,
  tab_indicator_height:             2,
  tab_label_line_height,
  tab_label_transition_property:    "opacity, color, backgroundColor",
  tab_label_vertical_offset:        tab_label_line_height - fontSize,
  tab_max_width:                    "initial",
  tab_menu_content_padding_v:       6,
  tab_min_width:                    72,
  tab_min_width_tablet:             160,
  tabs_indent:                      0,
  tabs_scroll_delay:                .15,
  tabs_scroll_min_duration:         .5,
  tabs_scroll_speed:                600, // px per second
 
  color_light:                      rgba(vars.color_light_foreground, vars.blend_light_text_regular),
  color_light_selected:             rgba(vars.color_primary),
  color_light_selected_background:  "transparent",
  color_light_tab_indicator:        rgba(vars.color_primary),
  color_light_icon:                 iconButtonVars.color_light,
 
  color_dark:                       rgba(vars.color_dark_foreground, vars.blend_dark_text_regular),
  color_dark_selected:              rgba(vars.color_primary),
  color_dark_selected_background:   "transparent",
  color_dark_tab_indicator:         rgba(vars.color_primary),
  color_dark_icon:                  iconButtonVars.color_dark

  // hover colors may be set in theme; disabled by default

  // color_light_hover:                    rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  // color_light_hover_background:         "transparent",
  //
  // color_dark_hover:                     rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  // color_dark_hover_background:          "transparent",
};
