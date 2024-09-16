import AWS from "aws-sdk";

// 환경 변수 설정
const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY;
const secretAccessKey = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
const region = process.env.REACT_APP_AWS_REGION;
const bucketName = process.env.REACT_APP_AWS_S3_BUCKET_NAME;

// AWS S3 설정
AWS.config.update({
  accessKeyId,
  secretAccessKey,
  region,
});

const s3 = new AWS.S3();

/**
 * S3에 파일을 업로드하는 함수
 * @param {*} file
 * @returns imageURL
 */
const uploadFileToS3 = async (file) => {
  const params = {
    Bucket: bucketName,
    Key: file.name,
    Body: file,
    ContentType: file.type,
  };
  console.log(params);
  try {
    const uploadResult = await s3.upload(params).promise();
    return uploadResult.Location; // 업로드된 파일의 URL 반환
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    throw error;
  }
};

export default uploadFileToS3;
