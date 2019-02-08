'use strict';
import * as AWS from "aws-sdk";
import * as querystring from "querystring";

module.exports.DeleteBlog = (event, context, callback) => {
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
        TableName: table,
        Key:{
            "BlogID": event.queryStringParameters.BlogID
        }
    };

    docClient.delete(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            response.statusCode = 500;
            response.body = "Cannot find blog for " + event.BlogID;
            callback(null, response);
        } else if (data == null) {
            response.statusCode = 404;
            response.body = "Cannot find blog for " + event.BlogID;
            callback(null, response);
        }else{
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            response.body = JSON.stringify(data);
            callback(null, response);
        }
    });
};