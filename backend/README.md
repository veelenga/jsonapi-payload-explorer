Serverless backend part for JSON:API Payload Explorer.

### Development

1. Install dependencies:

``` sh
$ shards install
```

2. Compile the app:

``` sh
docker run --rm -v "$PWD":/app -w /app crystallang/crystal sh -c \
  'shards build --release --no-debug --static && strip bin/bootstrap'
```

