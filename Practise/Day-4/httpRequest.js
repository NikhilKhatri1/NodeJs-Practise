const http = require('http');

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 80,
    path: '/todos/1', // Example endpoint that returns a JSON object
    method: 'GET',
    headers: {
        'Accept': 'application/json', // This tells the server to return JSON
    }
};

const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        try {
            // Try parsing the JSON data
            const jsonData = JSON.parse(data);
            console.log('Response JSON:', jsonData);
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    });
});

req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
});

req.end();
