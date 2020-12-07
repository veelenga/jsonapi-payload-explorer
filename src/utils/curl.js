const yargs = require('yargs')

export function tryParseCURL(str) {
  if (!str.startsWith('curl')) {
    return null;
  }

  // preprocess str
  str = str.replace('--data-binary $', '-d');
  str = str.replace("\\'", "");

  const request = parseCURL(str);
  if (request.type === 'application/json' && request.data) {
    return request.data;
  }

  return null;
}

function parseCURL(curlCommand) {
 // Remove newlines (and from continuations)
  curlCommand = curlCommand.replace(/\\\r|\\\n/g, '')

  // Remove extra whitespace
  curlCommand = curlCommand.replace(/\s+/g, ' ')

  // yargs parses -XPOST as separate arguments. just prescreen for it.
  curlCommand = curlCommand.replace(/ -XPOST/, ' -X POST')
  curlCommand = curlCommand.replace(/ -XGET/, ' -X GET')
  curlCommand = curlCommand.replace(/ -XPUT/, ' -X PUT')
  curlCommand = curlCommand.replace(/ -XPATCH/, ' -X PATCH')
  curlCommand = curlCommand.replace(/ -XDELETE/, ' -X DELETE')
  // Safari adds `-Xnull` if is unable to determine the request type, it can be ignored
  curlCommand = curlCommand.replace(/ -Xnull/, ' ')
  curlCommand = curlCommand.trim()

  // Parse with some understanding of the meanings of flags.  In particular,
  // boolean flags can be trouble if the URL to fetch follows immediately
  // after, since it will be taken as an argument to the flag rather than
  // interpreted as a positional argument.  Someone should add all the flags
  // likely to cause trouble here.
  const parsedArguments = yargs
    .boolean(['I', 'head', 'compressed', 'L', 'k', 'silent', 's'])
    .alias('H', 'header')
    .alias('A', 'user-agent')
    .parse(curlCommand)

  let request = {};
  let headers = {};

  if (parsedArguments.header) {
    if (!Array.isArray(parsedArguments.header)) {
      parsedArguments.header = [parsedArguments.header]
    }
    parsedArguments.header.forEach(header => {
      const components = header.split(/:(.*)/)
      if (components[1]) {
        headers[components[0]] = components[1].trim()
      }
    })
  }

  if (headers['Content-Type'].indexOf('json') > 0) {
    request.type = 'application/json';
  }

  if (parsedArguments.data) {
    request.data = parsedArguments.data
  } else if (parsedArguments['data-binary']) {
    request.data = parsedArguments['data-binary']
    request.isDataBinary = true
  } else if (parsedArguments.d) {
    request.data = parsedArguments.d
  } else if (parsedArguments['data-ascii']) {
    request.data = parsedArguments['data-ascii']
  } else if (parsedArguments['data-raw']) {
    request.data = parsedArguments['data-raw']
    request.isDataRaw = true
  }
  return request;
}
