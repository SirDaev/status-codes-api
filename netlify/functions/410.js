exports.handler = async function (event, context) {
  return {
    statusCode: 410,
    headers: {
      /* Required for CORS support to work */
      'Access-Control-Allow-Origin': '*',
      /* Required for cookies, authorization headers with HTTPS */
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(
      [
        {
          message: "You got the code!"
        }
      ]
    ),
  };
}