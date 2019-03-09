# A Starter template for creating AWS Lambda Functions with Typescript

If you don't have yarn you can [install it here](https://yarnpkg.com/lang/en/docs/install/#mac-stable).

## Get Started with Yarn

`yarn install` and then `yarn bundle`

This will create you a super slim build folder ready to go!

### Tests

`yarn test`

### Deployment

From within the *build* folder that is created from `yarn bundle`

`aws cloudformation package --template-file $(pwd)/template.yml --output-template-file template-sam.yml --s3-prefix my-sam-app --s3-bucket some-bucket`

then:

`aws cloudformation deploy --template-file $(pwd)/template-sam.yaml --stack-name myStack --capabilities CAPABILITY_NAMED_IAM`