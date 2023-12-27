module.exports = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'enock',
  password: '123interview',
  database: 'dellivbd',
  synchronize: true,
  logging: true,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};