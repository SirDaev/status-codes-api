exports.handler = async function (event, context, response) {

  console.log(response)
  console.log("dave was here")

    const code = event.path.match(/([^\/]*)\/*$/)[1];

    return {
      statusCode: parseInt(code),
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