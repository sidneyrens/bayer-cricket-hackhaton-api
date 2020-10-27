import { getDataFromDynamoDB } from './dynamoCalls'

export const getUserInfo = async (req, resp, next) => {
  try {
    const user = req.params.userid;
    console.log('user', user);

    const userData = await getDataFromDynamoDB('user', user);
    console.log('userData', userData);

    req.userData = userData.Item;
    next();
  } catch (e) {
    console.error(JSON.stringify(e))
    return {
      statusCode: e.statusCode,
      body: JSON.stringify(e)
    }
  }
} 