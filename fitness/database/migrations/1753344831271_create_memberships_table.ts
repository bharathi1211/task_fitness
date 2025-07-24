import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'memberships'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('m_id').primary().references('member_id').inTable('members').onDelete('CASCADE')
      table.timestamp('start_date')
      table.timestamp('due_date')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}