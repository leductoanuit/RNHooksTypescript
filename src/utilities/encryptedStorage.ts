import EncryptedStorage from 'react-native-encrypted-storage';

const STORAGE_TOKEN = 'STORAGE_TOKEN';

/**
 *  Async Save token to Encrypted Storage
 *
 * @param accessToken is string
 * @param refreshToken is string
 */
async function setToken(accessToken: string = '', refreshToken: string = '') {
  try {
    await EncryptedStorage.setItem(
      STORAGE_TOKEN,
      JSON.stringify({
        accessToken,
        refreshToken,
      })
    );
  } catch (error) {
    console.log('Cannot save encrypted memory!', error);
  }
}

/**
 *  Async Return token from Encrypted Storage
 */
async function getToken() {
  try {
    const data = await EncryptedStorage.getItem(STORAGE_TOKEN);
    if (data !== undefined) {
      return data;
    }
  } catch (error) {
    console.log('Cannot access encrypted memory!', error);
  }
}

/**
 *  Async Remove token in Encrypted Storage
 */
async function removeToken() {
  try {
    await EncryptedStorage.removeItem(STORAGE_TOKEN);
  } catch (error) {
    console.log('Cannot remove encrypted memory!', error);
  }
}

const Storage = {
  setToken,
  getToken,
  removeToken,
};

export default Storage;
