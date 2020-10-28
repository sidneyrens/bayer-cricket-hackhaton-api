const AWS = require('aws-sdk');
const s3 = new AWS.S3();

export const getS3Object = async (req, resp) => {
   try {
      const params = {
         Bucket: 'bayer-cricket-hackathon',
         Key: req.userData.file
      };
      const filestream = s3.getObject(params).createReadStream();
      resp.set('Content-Disposition', 'attachment;filename=' + req.userData.file);
      filestream.pipe(resp);
   } catch (e) {
      console.error(JSON.stringify(e));
      return {
         statusCode: e.statusCode,
         body: e.statusText
      };
   }
};
