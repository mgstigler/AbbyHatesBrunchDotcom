'use strict';
import * as AWS from "aws-sdk";
import { UserModel } from "../Shared/Models/userModel"

module.exports.CreateLogin = (event: UserModel, context, callback) => {
    console.info("Received event: ", JSON.stringify(event, null, 2));

    let docClient = new AWS.DynamoDB.DocumentClient();

    let table = "AbbyUsers";

    let params = {
        TableName:table,
        Item:{
            "UserID": event.UserID,
            "Password": event.Password
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
            console.error("Unable to create User. Error JSON:", JSON.stringify(err, null, 2));
            response.message = "Unable to create User " + event.UserID;
            callback(null, response);
        } else if(params == null){
            response.statusCode = 404;
            response.message = "Unable to create User " + event.UserID;
            callback(null, response);
        } else {
            response.message = "Created User " + event.UserID + " succeeded.";
            callback(null, response);
        }
    });
};