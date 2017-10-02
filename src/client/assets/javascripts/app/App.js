import React, { PropTypes } from 'react';

const App = (props) => (
  <div className="page-container">
    {/* {React.cloneElement({...props}.children, {...props})} */}
    {{...props}.children}
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
