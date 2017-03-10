# aws-serverless-web-application with S3 and Lambda with Angular-2

(Work in progress) A simple serverless web application, with full automation of deployment on to AWS(Amazon Web Services) platform.
    
## Requirements

    1. AWS account
        a. S3 storage for static content 
        b. Lambda for server side processing 
        c. Angular 2 as client side mvc framework.
    2. Mac/Linux with npm & Node.js 

    ## Installation

1. Clone the repository
2. Install the application: `npm install`
3. To run locally start the server with gulp: `gulp`
4. View in browser at `http://localhost:3000`
5. configure AWS credentials and other properties in: `aws/aws.properties`
6. run `aws/deployToAws.sh` to deploy to AWS cloud.
7. Get the url for AWS API Gateway and launch browser with the url.
