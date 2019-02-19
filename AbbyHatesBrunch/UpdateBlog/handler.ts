'use strict';
import * as AWS from "aws-sdk";
import { BlogModel } from "../Shared/Models/blogModel"

module.exports.UpdateBlog = (event: BlogModel, context, callback) => {
    console.info("Received event: ", JSON.stringify(event, null, 2));

    let docClient = new AWS.DynamoDB.DocumentClient()

    let table = "Blogs";

    // Update the item, unconditionally,
    let params = {
        TableName:table,
        Key:{
            "BlogID": event.BlogID
        },
        UpdateExpression: "set BlogContent = :bc, BlogTitle = :bt, EggRating = :er, PictureId = :pi",
        ExpressionAttributeValues:{
            ":bc": event.BlogContent,
            ":bt": event.BlogTitle,
            ":m": event.Mimosas
        },
        ReturnValues:"UPDATED_NEW"
    };

    let response = {
        statusCode: 200,
        message: ""
    };
       
    console.log("Updating the blog...");
    docClient.update(params, function(err, data) {
        if (err) {
            response.statusCode = 500;
            console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
            response.message = "Unable to update blog";
            callback(null, response);
        } else {
            console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
            response.message = "Updated blog successfully.";
            callback(null, response);
        }
    });
};