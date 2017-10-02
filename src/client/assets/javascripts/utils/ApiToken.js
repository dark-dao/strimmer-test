/* eslint-disable no-underscore-dangle, class-methods-use-this */
'use strict';
import cookies from 'js-cookie';
import ApiClient from './ApiClient';

const ApiToken = {
  getToken: () => {
    //console.log(localStorage.getItem('token'));
    console.log(cookies.get('token'));
    const token = cookies.get('token') || '';
    return token;
  },
  setToken: (newToken) => {
    localStorage.setItem('token', newToken);
    cookies.set('token', newToken);
  },
  removeToken: () => {
    localStorage.removeItem('token');
    cookies.remove('token');
  },
  checkToken: () => {
    const token = cookies.get('token');
    return new ApiClient().get('/auth', null);
  }
};

export default ApiToken;
