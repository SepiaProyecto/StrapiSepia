module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '10.147.20.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'bd_cursox'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'root_01'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
