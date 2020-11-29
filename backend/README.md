Serverless backend part for JSON:API Payload Explorer.

### Development

1. Provide AWS credentials to `.env` file.

2. Run docker container:

``` sh
$ docker-compose up -d dynamodb api
```

### Deployment

1. Compile app:

``` sh
$ docker run --rm -v "$PWD":/app -w /app crystallang/crystal sh -c \
  'shards build --release --no-debug --static && strip bin/bootstrap'
```

2. Zip the binary:

``` sh
$ cd bin && zip lambda.zip bootstrap
```

3. Upload zip to AWS
