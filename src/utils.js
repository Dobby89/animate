/**
 * Returns a string if CSS @keyframes are supported,
 * otherwise a False is returned
 */
export function supportsKeyframe() {
  let supported = false;
  let prefix = "";
  const property = "animationName";
  const testEl = document.createElement("div");
  const prefixes = ["", "Webkit", "Moz", "ms", "O"];

  for (let i = 0; i < prefixes.length; i++) {
    prefix = prefixes[i];
    let prefixProperty = property;
    if (prefix.length) {
      prefixProperty = `${prefix}-${property.charAt(0).toUpperCase() +
        property.substr(1)}`;
    }

    if (testEl.style[prefixProperty] !== undefined) {
      supported = true;
    }
  }

  // Return the prefix string ("Webkit", "Moz", "ms", "O") or false
  return supported ? prefix : false;
}

export function supportsAnimate() {
  return document.documentElement.animate ? true : false;
}
