import DinProBold from './DINPro-Bold.ttf';
import DinProMedium from './DINPro-Medium.ttf';

const fonts = () => `@font-face {
    font-family: 'DNProBold';
    src: url(${DinProBold}) format('opentype');
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    font-weight: 100;
  }

  @font-face {
    font-family: 'DNProMedium';
    src: url(${DinProMedium}) format('opentype');
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    font-weight: 100;
  }`;

export default fonts;
