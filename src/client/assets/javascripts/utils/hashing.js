'use strict';
import bcrypt from 'crypto-js';
import { config } from '../app/config';

const hashing = {
  getHash: (nonHashedString) => {
    const hash = bcrypt.AES.encrypt(nonHashedString, 'secret key 123');

    return hash.toString;
  }
};

export default hashing;
