exports.handler = async function (event, context, response) {

    const code = event.path.match(/([^\/]*)\/*$/)[1];

    const codeInt = parseInt(code);

    if(codeInt === 100) {
      console.log('100 writeContinue')
      response.writeContinue()
    }

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