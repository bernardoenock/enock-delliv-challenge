export const fakeLogin = {
  "email": "regitred@t.com",
  "password": "123456"
}

export const fakeRegister = {
  "name": "User Testudin",
  "email": "regitred@t.com",
  "password": "123456"
}

export const authServiceMock = {
  prisma: {
    findUnique: jest.fn()
  },
  usersService: {
    createUser: jest.fn().mockReturnValue(fakeRegister)
  },
  bcrypt: {
    compare: jest.fn(),
    hash: jest.fn()
  },
  jwtService: {
    sign: jest.fn()
  }
}