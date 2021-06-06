import {
  lightColor,
  darkColor,
  accentColor,
  switchAccentColor,
} from "../constants";

export const changeTheme = (switchTheme) => {
  if (switchTheme) {
    document.documentElement.style.setProperty("--clr-accent", accentColor);
    document.documentElement.style.setProperty("--clr-secondary", darkColor);
    document.documentElement.style.setProperty("--clr-primary", lightColor);
    document.documentElement.style.setProperty("--clr-banner", lightColor);
  } else {
    document.documentElement.style.setProperty(
      "--clr-accent",
      switchAccentColor
    );
    document.documentElement.style.setProperty("--clr-secondary", lightColor);
    document.documentElement.style.setProperty("--clr-primary", darkColor);
    document.documentElement.style.setProperty("--clr-banner", darkColor);
  }
};
