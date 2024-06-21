import localforage from "localforage";
import moment from "moment";

const CACHE_PREFIX = "cachedData_";
const CACHE_EXPIRATION = 60 * 60 * 1000;

export const getCachedData = async (endpoint) => {
  try {
    const cachedData = await localforage.getItem(`${CACHE_PREFIX}${endpoint}`);
    if (
      cachedData &&
      cachedData.timestamp &&
      moment().diff(cachedData.timestamp) < CACHE_EXPIRATION
    ) {
      return cachedData.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export const cacheData = async (endpoint, data) => {
  try {
    const cachedData = {
      data,
      timestamp: moment().toISOString(),
    };
    await localforage.setItem(`${CACHE_PREFIX}${endpoint}`, cachedData);
  } catch (error) {
    return null;
  }
};
