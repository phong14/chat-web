import CryptoJS from 'crypto-js';
import _split from 'lodash/split';
import { ENV } from '@/core/configs';

const { CRYPTO_KEY_SIZE, SECRET_KEY } = ENV;
const SECRET_KEY_REVERSE = _split(SECRET_KEY, '').reverse().join('');

function sanitizeUTF8(input: string): string {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    const code = input.charCodeAt(i);
    if (code < 128) {
      output += input.charAt(i);
    } else if (code < 2048) {
      output += String.fromCharCode((code >> 6) | 192);
      output += String.fromCharCode((code & 63) | 128);
    } else {
      output += String.fromCharCode((code >> 12) | 224);
      output += String.fromCharCode(((code >> 6) & 63) | 128);
      output += String.fromCharCode((code & 63) | 128);
    }
  }
  return output;
}

export function encrypted(value: string): string {
  if (!SECRET_KEY) {
    throw new Error('SECRET_KEY is not defined');
  }

  const sanitizedValue = sanitizeUTF8(value ?? '');
  const sanitizedKey = sanitizeUTF8(SECRET_KEY ?? '');
  const sanitizedIv = sanitizeUTF8(SECRET_KEY_REVERSE ?? '');
  const key = CryptoJS.enc.Utf8.parse(sanitizedKey);
  const iv = CryptoJS.enc.Utf8.parse(sanitizedIv);

  const encrypted = CryptoJS.AES.encrypt(sanitizedValue, key, {
    keySize: CRYPTO_KEY_SIZE,
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
  return encrypted;
}

export function decrypted(value: string): string {
  if (!SECRET_KEY) {
    throw new Error('SECRET_KEY is not defined');
  }

  const sanitizedValue = sanitizeUTF8(value ?? '');
  const sanitizedKey = sanitizeUTF8(SECRET_KEY ?? '');
  const sanitizedIv = sanitizeUTF8(SECRET_KEY_REVERSE ?? '');
  const key = CryptoJS.enc.Utf8.parse(sanitizedKey);
  const iv = CryptoJS.enc.Utf8.parse(sanitizedIv);

  const cipher = CryptoJS.AES.decrypt(sanitizedValue, key, {
    keySize: CRYPTO_KEY_SIZE,
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return CryptoJS.enc.Utf8.stringify(cipher);
}
