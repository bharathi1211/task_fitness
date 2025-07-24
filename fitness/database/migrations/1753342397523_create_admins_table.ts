import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'admins'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('admin_id').primary()
      table.string('username').notNullable()
      table.string('password').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}