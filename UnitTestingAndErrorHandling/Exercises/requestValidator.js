function requestValidator(request) {
	const methodValidate = ['GET', 'POST', 'DELETE', 'CONNECT'];
	const versionValidate = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
	let uriPattern = /[^A-Za-z0-9.*]+/;
	let messagePattern = /[<>\\&'"]+/;

	if (!request.method|| !methodValidate.includes(request.method)) {
		throw new Error ('Invalid request header: Invalid Method');
	}
	if (!request.uri || uriPattern.test(request.uri)) {
		throw new Error ('Invalid request header: Invalid URI');
	}
	if (!request.version || !(versionValidate.includes(request.version))) {
		throw new Error ('Invalid request header: Invalid Version');
	}
	if (!request.hasOwnProperty('message') || messagePattern.test(request.message)) {
		throw new Error ('Invalid request header: Invalid Message');
	}
	return request;
}


try {
	const validRequest = {
		method: 'GET',
		uri: 'svn.public.catalog',
		version: 'HTTP/1.1',
		message: ''
	};
	console.log(requestValidator(validRequest));
} catch (error) {
	console.error(error.message);
}

try {
	const invalidRequest = {
		method: 'OPTIONS',
		uri: 'git.master',
		version: 'HTTP/1.1',
		message: '-recursive'
	};
	console.log(requestValidator(invalidRequest));
} catch (error) {
	console.error(error.message);
}

try {
	const anotherInvalidRequest = {
		method: 'POST',
		uri: 'home.bash',
		message: 'rm -rf /*'
	};
	console.log(requestValidator(anotherInvalidRequest));
} catch (error) {
	console.error(error.message);
}