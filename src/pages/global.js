import {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle`
 * {
   box-sizing: border-box;
   padding: 0;
   margin: 0;
 }
  :root {
    --brand-black: #000;
}

  .row {
    max-width: 1140px;
    margin: 0 auto;
  }
`;

export default Global
