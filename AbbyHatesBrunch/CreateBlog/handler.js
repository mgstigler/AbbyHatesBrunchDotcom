'use strict';
exports.__esModule = true;
var AWS = require("aws-sdk");
var uuid = require("uuid");
module.exports.CreateBlog = function (event, context, callback) {
    console.info("Received event: ", JSON.stringify(event, null, 2));
    var docClient = new AWS.DynamoDB.DocumentClient();
    var table = "Blogs";
    var params = {
        TableName: table,
        Item: {
            "BlogID": uuid.v1(),
            "BlogTitle": event.BlogTitle,
            "BlogContent": event.BlogContent,
            "Mimosas": event.Mimosas
        }
    };
    var response = {
        statusCode: 200,
        message: ""
    };
    console.log("Adding a new item...");
    docClient.put(params, function (err, data) {
        if (err) {
            response.statusCode = 500;
            console.error("Unable to create Blog. Error JSON:", JSON.stringify(err, null, 2));
            response.message = "Unable to create Blog " + event.BlogTitle;
            callback(null, response);
        }
        else if (params == null) {
            response.statusCode = 404;
            response.message = "Unable to create Blog " + event.BlogTitle;
            callback(null, response);
        }
        else {
            response.message = "Created Blog " + event.BlogTitle + " succeeded.";
            callback(null, response);
        }
    });
};
