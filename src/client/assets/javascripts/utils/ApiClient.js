'use strict';
import _ from 'lodash';
import request from 'request-promise';

import { config } from '../app/config';
import ApiToken from './ApiToken';

const metods = ['get', 'post', 'put', 'patch', 'delete'];
class ApiClient {
  constructor() {
    metods.forEach((method) => {
      this[method] = (url, rest) => {
        //localStorage.getItem('token')
        const apiToken = ApiToken.getToken();

        let options = {
            method: _.upperCase([method]),
            uri: `${config.apiUrl}${url}`,
            headers: {
                'X-Access-Token': apiToken,
                'if-none-match': ''
            },
            body: rest,
            json: true // Automatically parses the JSON string in the response
        };
        console.log(options);

        return request(options).then((repos) => {
            return repos;
        }).catch((err) => {
            return err;
        });
      };
    });
  }
}
export default ApiClient;
