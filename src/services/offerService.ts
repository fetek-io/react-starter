import axios from 'axios';

export async function getOffers() {
  try {
    const res = await axios.get('https://justjoin.it/api/offers');
    return {
      success: true,
      data: res,
    };
  } catch (e) {
    return {
      success: false,
      data: e,
    };
  }
}
