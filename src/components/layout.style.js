import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,4JUdGzvrMFDWrUUwY3toJATSeNwjn54LkCnKBPRzDuhzi5vSepHfUckJNxRL2gjkNrSqtCoRUrEDAgRwsQvVCjZbRyFTLRNyDmT1a1boZV700;1,900&family=Playfair+Display:ital,wght@1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  cursor: default;
}

:root {
  --fontMajor: 'Nunito', sans-serif;
  --fontminor: 'Playfair Display', serif;
  --fontminorsub: 'Playfair Display SC', serif;
  --mainblue: #0099ed;
  --mainbluelow: #f6f7f7;

}
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
main {
  display: block;
  font-family: 'Lexend Deca', sans-serif;
  color: #272727;
  text-rendering: optimizeLegibility;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
pre {
  font-size: 1em;
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-size: 1em;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
progress {
  vertical-align: baseline;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
details {
  display: block;
}
summary {
  display: list-item;
}
[hidden],
template {
  display: none;
}
html {
  box-sizing: border-box;
}
[hidden],
template {
  display: none;
}
*,
:after,
:before {
  box-sizing: inherit;
}
address {
  font-style: inherit;
}
cite,
dfn,
em,
i {
  font-style: italic;
}
b,
strong {
  font-weight: 700;
}
a {
  text-decoration: none;
}
a svg {
  pointer-events: none;
}
ol,
ul {
  list-style: none;
}
figure,
ol,
p,
ul {
  margin: 0;
  padding: 0;
}
[tabindex],
a,
area,
button,
input,
label,
select,
textarea {
  touch-action: manipulation;
}
[hreflang] > abbr[title] {
  text-decoration: none;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
hr {
  display: block;
  margin: 1em 0;
  padding: 0;
  height: 1px;
  border: 0;
  border-top: 1px solid #272727;
}
audio,
canvas,
iframe,
img,
svg,
video {
  vertical-align: middle;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
img,
svg {
  max-width: 100%;
  height: auto;
}
img[height],
img[width],
svg[height],
svg[width] {
  max-width: none;
}
img {
  font-style: italic;
}
svg {
  fill: currentColor;
}
input,
select,
textarea {
  display: block;
  margin: 0;
  padding: 0;
  width: 100%;
  outline: 0;
  border: 0;
  border-radius: 0;
  background: none transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select {
  text-transform: none;
}
select::-ms-expand {
  display: none;
}
select::-ms-value {
  background: none;
  color: inherit;
}
textarea {
  overflow: auto;
  resize: vertical;
}
.o-button,
button {
  display: inline-block;
  overflow: visible;
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  background: none transparent;
  color: inherit;
  vertical-align: middle;
  text-align: center;
  text-transform: none;
  font: inherit;
  line-height: normal;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

button,
button:focus,
button:hover {
  text-decoration: none;
}

html {
  color: #222;
  line-height: 1.5;
}
@media (max-width: 699px) {
  html {
      font-size: 12px;
  }
}
@media (min-width: 700px) and (max-width: 999px) {
  html {
      font-size: 13px;
  }
}
@media (min-width: 1000px) and (max-width: 1199px) {
  html {
      font-size: 14px;
  }
}
@media (min-width: 1200px) and (max-width: 1599px) {
  html {
      font-size: 16px;
  }
}
@media (min-width: 1600px) and (max-width: 1999px) {
  html {
      font-size: 18px;
  }
}
@media (min-width: 2000px) and (max-width: 2399px) {
  html {
      font-size: 21px;
  }
}
@media (min-width: 2400px) {
  html {
      font-size: 24px;
  }
}

::-moz-selection {
  background-color: #272727;
  color: #fff;
  text-shadow: none;
}
::selection {
  background-color: #272727;
  color: #fff;
  text-shadow: none;
}
a {
  transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  color: #272727;
}

div.row {
  max-width:1140px ;
  margin: 0 auto;
}
`

export default Global
