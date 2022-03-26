type Config = {
  db: string
  user: string
  pwd: string
  host: string
  dialect: 'mysql' | 'mariadb' | 'postgres' | 'mssql'
}

const config: Config = {
  db: 'database',
  user: 'user',
  pwd: 'password',
  host: 'host',
  dialect: 'mysql',
}

export default config
