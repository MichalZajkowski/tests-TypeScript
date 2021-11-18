
const pactum = require('pactum');
const url = 'http://localhost:3000'

it('valid json response for GET', async () => {
    await pactum.spec()
        .get(url)
        .expectStatus(200)
        .expectJson({
            "message": "Hello World!"
        })
        .expectJsonSchema({
            type: 'object',
            properties: {
                message: {
                    type: 'string'
                }
            }
        })
        .expectResponseTime(100);
});

it('valid response for POST', async () => {
    await pactum.spec()
        .post(url)
        .withJson({
            'name': 'Mike',
            'id': '007'
        })
        .expectStatus(200)
        .expectJson({
            "message": "OK"
        })
})