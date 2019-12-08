require('dotenv').config();
const request = require('supertest');
const app = require('../lib/app');
const connect = require('../config/db');
const colors = require('colors');
const mongoose = require('mongoose');


describe('application routes', () => {
  beforeAll(() => {
    connect()
  });
  afterAll(() => {
    return mongoose.connection.dropDatabase();
  });
  it('can create a bar using post', () => {
    return request(app)
    .post('/bars')
    .send({
      name: 'some bar',
      phone: '555-555-5555',
      age: 21
    })
    .then(res => {
      expect(res.body).toEqual({
        _id: expect.any(String),
        name: 'some bar',
        phone: '555-555-5555',
        age: 21,
        __v: 0
      })
    })
  });
    it('can get all bars using get method', () => {
      return request(app)
        .get('/bars')
        .then(res => {
          expect(res.body).toEqual([{
            _id: expect.any(String),
            name: 'some bar',
            phone: '555-555-5555',
            age: 21,
            __v: 0
          }]);
          expect(res.body).toHaveLength(1);
        })
      })
    });


    
// it('should update a bar', async () => {
   
//     const updatedBar = await request(app)
//       .put(`/bars/id`)
//       expect(updatedBar.body).toHaveProperty("id");
//     expect(updatedBar.body.name).toBe("updated");
//   });

// describe("DELETE /bars/1", () => {
//   test("It responds with a message of Deleted", async () => {
//     const newBar = await request(app)
//       .post("/bars")
//       .send({
//         name: "Another one"
//       });
//     const deleteBar = await request(app).delete(
//       `/bars/${newBar.body.id}`
//     );
//     expect(deleteBar.body).toEqual({ message: "Deleted" });
//     const response = await request(app).get("/bars");
//     expect(response.body.length).toBe(0);
//   });
// });





// describe('GET /api/v0/bar:id - get bar item by id', () => {
//   it('should return an obj of type Bar', () => {
//     return request(app).get('/api/v0/bar/1')
//       // .expect(200)
//       .then((res) => {
//         const reqKeys = ['id', 'name', 'age', 'averageRating'];
//         const { item } = res.body;
//         // check it has correct keys
//         reqKeys.forEach((key) => {
//           expect(Object.keys(item)).toContain(key);
//         });
//         // check type of each field
//         expect(item.id).toEqual(String),
//         expect(typeof item.name).toBe('string');
//         expect(typeof item.averageRating).toBe('number');
//         expect(typeof item.age).toBe('number');
//       });
//   });
// });
//   it('should return a Bar w/ requested id', () => {
//     return request(app).get('/api/v0/bar/1')
//       .expect(200)
//       .then((res) => {
//         expect(res.body.item).toEqual({
//           id: 1,
//           name: 'banana',
//           averageRating: 15,
//           age: 1
//         });
//       });
//   });
//   it('should 400 on a request for a nonexistant id', () => {
//     return Promise.all([
//       request(app).get('/api/v0/bar/-32')
//         .expect(400)
//         .then((res) => {
//           expect(res.body.message).toBe('No item found with id: -32');
//         }),
//       request(app).get('/api/v0/bar/99999')
//         .expect(400)
//         .then((res) => {
//           expect(res.body.message).toBe('No item found with id: 99999');
//         })
//     ]);
//   });
// });









































//     it('can find bar by id and update', () => {
//       return request(app)
//       .put('/bars/id')
//       .then(res => {
//         expect(res.body).toEqual([{
//           _id: expect.any(String),
//           name: 'some bar',
//           phone: '555-555-5555',
//           age: 21,
//           __v: 0
//         }])
//       })
//     });
//     it('can find bar by id and delete', () => {
//       return request(app)
//       .delete('/bars/:id')
//       .then(res => {
//         expect(res.body).toEqual([{
//           _id: expect.any(String),
//           name: 'some bar',
//           phone: '555-555-5555',
//           age: 21,
//           __v: 0
//       }])
//     });
//   });
//     it('can find bar by a single id', () => {
//       return request(app)
//       .get('/bars/id')
//       .then(res => {
//         expect(res.body).toEqual([{
//           _id: expect.any(String),
//           name: 'some bar',
//           phone: '555-555-5555',
//           age: 21,
//           __v: 0
//     }])
//   });
// })




