const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
  /**
   * @todo consider adding the whole package to our repository.
   * @body Might give us better performance, also considering that BlackFoundry
   * wouldnt change it considerably in the forseable future.
   */
  setHeadComponents([
    <link
      key='fonts'
      rel='stylesheet'
      href='https://cdn.jsdelivr.net/gh/BlackFoundryCom/InriaFonts@master/fonts/InriaSans/Web/fonts.css'
    />
  ]);
};
