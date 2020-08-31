import DinProBold from './DINPro-Bold.ttf';
import DinProMedium from './DINPro-Medium.ttf';

const fonts = () => `@font-face {
    font-family: 'DinProBold';
    src: url(${DinProBold}) format('opentype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'DinProMedium';
    src: url(${DinProMedium}) format('opentype');
    font-weight: 100;
    font-style: normal;
  }`;

export default fonts;
