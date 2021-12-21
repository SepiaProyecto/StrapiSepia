module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'ec2-52-200-188-218.compute-1.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'db90qkruentgr7'),
        username: env('DATABASE_USERNAME', 'mtszodzsmarawp'),
        password: env('DATABASE_PASSWORD', '3cbc1a693a6f412f333737afa5d9d53865d71b82a98f2b469410a29698f2bbea'),
        ssl:{rejectUnauthorized:env.bool('DATABASE_SSL_SELF',false)
      },
      },
      options: {ssl:env.bool('DATABASE_SSL',false),
    },
    options:{}
    },
  },
});
