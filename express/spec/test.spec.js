const request = require('supertest');

const app = 'http://localhost:8080/api';

describe('Material API', () => {
    beforeEach(async () => {
        const res = await request(app).get('/');
        res.body.filter(f => f.deliveryDate).map( async(e) => {
            const d = await request(app).delete('/' + e._id);
        });
    });

    it('should create a new Material', async () => {
        const res = await request(app)
            .post('/')
            .send({name: 'Iron',
                color: '#076530',
                volume: 100,
                cost: 25,
                deliveryDate: '2023-06-29'});

        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toBe('Iron');
        expect(res.body.volume).toBe(100);
        expect(res.body.cost).toBe(25);
        expect(res.body.deliveryDate).toBe('2023-06-29T00:00:00.000Z');
    });

    it('should get all Materials with deliveryDate', async () => {
        await request(app)
        .post('/')
        .send({name: 'Material 1',
            color: '#124578',
            volume: 100,
            cost: 0.5,
            deliveryDate: '2023-06-29'});
        await request(app)
            .post('/')
            .send({name: 'Material 2',
                color: '#334599',
                volume: 200,
                cost: 11.25,
                deliveryDate: '2023-06-29' });
        const res = await request(app).get('/');
        const ar = res.body.filter(f => f.deliveryDate);

        expect(res.statusCode).toEqual(200);
        expect(ar.length).toBe(2);
    });

    it('should create a new material and delete it', async () => {
        const res = await request(app)
            .post('/')
            .send({name: 'Iron',
                color: '#076530',
                volume: 100,
                cost: 25,
                deliveryDate: '2023-06-29'});
        const d = await request(app).delete('/'+res.body._id);
        expect(d.statusCode).toEqual(200);

        const r = await request(app).get('/');
        const ar = r.body.filter(f => f._id === res.body._id);
        expect(ar.length).toBe(0);
    });

});