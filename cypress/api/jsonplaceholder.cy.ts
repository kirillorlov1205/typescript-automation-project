describe('jsonplaceholder api testing', () => {

    beforeEach(() => {
        cy.visit('https://swapi.dev/api')
    })

    describe('GET', () => {
        
        it('Get user with id 1 list', () => {
            cy.request('GET', '/people/1').then((response) => {
                expect(response).to.have.property('status', 200)
                expect(response.body).to.have.property('name', 'Luke Skywalker')
            })
        })
        it('Get users list', () => {
            cy.request('GET', '/people').then((response) => {
                console.log(response.body.length)
                expect(response.body.results).to.have.length(10)
            })
        })
    })

    describe('POST', () => {
        it('Create user', () => {
            cy.request({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                body: {
                    title: 'New Post',
                    body: 'lets write post',
                    userId: 1,
                },
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then((response) => {
                expect(response.body).to.have.property('id', 101)
                expect(response.body).to.have.property('title', 'New Post')
            })
        })
    })
})