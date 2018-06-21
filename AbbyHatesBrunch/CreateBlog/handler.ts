'use strict';
import * as AWS from "aws-sdk";
import { BlogModel } from "../Shared/Models/blogModel"

module.exports.CreateBlog = (event: BlogModel, context, callback) => {
    console.info("Received event: ", JSON.stringify(event, null, 2));

    let docClient = new AWS.DynamoDB.DocumentClient();

    let table = "Blogs";

    let params = {
        TableName:table,
        Item:{
            "BlogID": event.BlogID,
            "BlogTitle": event.BlogTitle,
            "BlogContent": event.BlogContent,
            "EggRating": event.EggRating,
            "PictureId": event.PictureId
        }
    };

    let response = {
        statusCode: 200,
        message: ""
    };


    console.log("Adding a new item...");
    docClient.put(params, (err, data) => {
        if (err) {
            response.statusCode = 500;
            console.error("Unable to create Room. Error JSON:", JSON.stringify(err, null, 2));
            response.message = "Unable to create Blog " + event.BlogTitle;
            callback(null, response);
        } else if(params == null){
            response.statusCode = 404;
            response.message = "Unable to create Blog " + event.BlogTitle;
            callback(null, response);
        } else {
            response.message = "Created Blog " + event.BlogTitle + " succeeded.";
            callback(null, response);
        }
    });
};