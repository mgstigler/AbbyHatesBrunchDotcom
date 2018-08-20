'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk");
module.exports.ValidateLogin = (event, context, callback) => {
    console.info("Received event: ", JSON.stringify(event, null, 2));
    let docClient = new AWS.DynamoDB.DocumentClient();
    let table = "AbbyUsers";
    console.info(event);
    let response = {
        "statusCode": 200,
        "headers": {},
        "body": null,
        "isBase64Encoded": false
    };
    let params = {
        TableName: table,
        Key: {
            "UserID": event.queryStringParameters.UserID
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            response.statusCode = 500;
            response.body = "Cannot find user for " + event.UserID;
            callback(null, response);
        }
        else if (data.Item == null) {
            response.statusCode = 404;
            response.body = "Cannot find user for " + event.UserID;
            callback(null, response);
        }
        else if (data.Item.Password != event.queryStringParameters.Password) {
            response.statusCode = 401;
            response.body = "Unauthorized";
            callback(null, response);
        }
        else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            response.body = JSON.stringify(data);
            callback(null, response);
        }
    });
};
//# sourceMappingURL=handler.js.map