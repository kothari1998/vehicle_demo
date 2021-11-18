# vehicle_demo

#Project Setup:

npm install

#run:
node server.js

API point:

Add User :http://localhost:8080/api/users
Add vechicle : http://localhost:8080/api/vehicles
Add owner: http://localhost:8080/api/user_owned_vechicles
Get User Data : http://localhost:8080/api/vehicles/id

get All data :

User :
[
  {
    _id: new ObjectId("6195d70ece3b092044d0a1b0"),
    name: 'Rajan',
    surname: 'Kothari',
    email: 'rajan@gmail.com',
    phone: '9408141207',
    longitude: '144.963937',
    latitude: '-37.8245483',
    isDelete: false,
    createdAt: 2021-11-18T04:31:10.849Z,
    updatedAt: 2021-11-18T04:31:10.849Z,
    __v: 0
  },
  {
    _id: new ObjectId("6195db23ce3b092044d0a1b2"),
    name: 'Rajan',
    surname: 'Kothari',
    email: 'rajan@gmail.com',
    phone: '9408141207',
    isDelete: false,
    createdAt: 2021-11-18T04:48:35.265Z,
    updatedAt: 2021-11-18T04:48:35.265Z,
    __v: 0
  },
  {
    _id: new ObjectId("6195eaf41a1266559c8c5d83"),
    name: 'Nishi',
    surname: 'Kothari',
    email: 'rajan@gmail.com',
    phone: '9408141207',
    longitude: '144.963937',
    latitude: '-37.8245483',
    isDelete: false,
    createdAt: 2021-11-18T05:56:04.744Z,
    updatedAt: 2021-11-18T05:56:04.744Z,
    __v: 0
  }
]
vehicle in Database Courses:
[
  {
    _id: new ObjectId("6195de30cadea7ea72fcc93d"),
    user_id: '6195db23ce3b092044d0a1b2',
    vehicle_name: 'Activa',
    vehicle_brand: 'Honda',
    vehcile_number: 'GJ05JK7157',
    createdAt: 2021-11-18T05:01:36.092Z,
    updatedAt: 2021-11-18T05:01:36.092Z,
    __v: 0
  }
]