const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB.DocumentClient({
   region: 'us-east-2'
});

export const getDataFromDynamoDB = async (table, id) => {
   const params = {
      TableName: table,
      Key: {
         _id: id
      }
   };

   try {
      return await ddb.get(params).promise();
   } catch (e) {
      console.error(JSON.stringify(e));
      return e;
   }
};
