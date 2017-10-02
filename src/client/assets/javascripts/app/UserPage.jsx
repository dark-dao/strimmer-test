'use strict';

import React, { Component, PropTypes } from 'react';

const UserPage = (props) => (
  <div className="user-page">
    {{...props}.children}
  </div>
);

UserPage.propTypes = {
  children: PropTypes.element.isRequired
};

export default UserPage;
