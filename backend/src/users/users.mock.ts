export const fakeUsers = [
  {
    "id": "c0cd63b6-fc8a-439a-b248-6173a2bb765b",
    "name": "User Testudin",
    "email": "test1@t.com",
    "password": "123456"
  },
  {
    "id": "c0cd63b5-fc8a-439a-b248-6173a2bb765b",
    "name": "User Testudin II",
    "email": "test2@t.com",
    "password": "123456"
  },
  {
    "id": "c0cd63b4-fc8a-439a-b248-6173a2bb765b",
    "name": "User Testudin III",
    "email": "test3@t.com",
    "password": "123456"
  }
]

export const fakeInputUser = {
  "name": "Regis Testudin",
  "email": "regitred@t.com",
  "password": "123456"
}

export const usersPrismaMock = {
  users: {
    create: jest.fn().mockReturnValue(fakeInputUser),
    findMany: jest.fn().mockResolvedValue(fakeUsers),
    findUnique: jest.fn(),
  }
}
