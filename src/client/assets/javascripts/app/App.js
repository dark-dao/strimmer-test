import React, { PropTypes } from 'react';

const App = (props) => (
  <div className="page-container">
    {{...props}.children}
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
