. ./aws.properties

# copy static content to s3 bucket
aws s3 cp ../app/ s3://${aws.s3.bucket}/ --recursive --exclude "*" --include "*.js" --include "*.html"

 