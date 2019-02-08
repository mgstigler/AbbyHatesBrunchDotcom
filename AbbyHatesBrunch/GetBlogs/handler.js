'use strict';
exports.__esModule = true;
var AWS = require("aws-sdk");
module.exports.GetBlogs = function (event, context, callback) {
    console.info("Received event: ", JSON.stringify(event, null, 2));
    var docClient = new AWS.DynamoDB.DocumentClient();
    var table = "Blogs";
    console.info(event);
    var response = {
        "statusCode": 200,
        "headers": {},
        "body": null,
        "isBase64Encoded": false
    };
    var params = {
        TableName: table
    };
    docClient.scan(params, function (err, data) {
        if (err) {
            console.error("Unable to read from table. Error JSON:", JSON.stringify(err, null, 2));
            response.statusCode = 500;
            response.body = "Cannot find blogs";
            callback(null, response);
        }
        else if (data == null) {
            response.statusCode = 404;
            response.body = "Cannot find blogs";
            callback(null, response);
        }
        else {
            console.log("Scan succeeded:", JSON.stringify(data, null, 2));
            response.body = JSON.stringify(data);
            callback(null, response);
        }
    });
};
