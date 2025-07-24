import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'classes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('c_id')
      table.string('c_name')
      table.integer('t_id')
      table.time('start_time')
      table.time('end_time')
      table.specificType('days', 'text[]')
      table.integer('price')
      table.integer('total')
      table.integer('count')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}