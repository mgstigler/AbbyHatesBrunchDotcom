'use strict';
import * as AWS from "aws-sdk";
import * as querystring from "querystring";

module.exports.GetBlogs = (event, context, callback) => {
    console.info("Received event: ", JSON.stringify(event, null, 2));
    let docClient = new AWS.DynamoDB.DocumentClient()
    let table = "Blogs";

    console.info(event);
    let response = {
        "statusCode": 200,
        "headers": {
        },
        "body": null,
        "isBase64Encoded": false
    }

    let params = {
        TableName: table
    };

    docClient.scan(params, function(err, data) {
        if (err) {
            console.error("Unable to read from table. Error JSON:", JSON.stringify(err, null, 2));
            response.statusCode = 500;
            response.body = "Cannot find blogs";
            callback(null, response);
        } else if (data == null) {
            response.statusCode = 404;
            response.body = "Cannot find blogs";
            callback(null, response);
        }else{
            console.log("Scan succeeded:", JSON.stringify(data, null, 2));
            response.body = JSON.stringify(data);
            callback(null, response);
        }
    });
};