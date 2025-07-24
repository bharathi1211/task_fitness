import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('member_id').primary()
      table.string('member_name')
      table.integer('member_age')
      table.string('member_contact')
      table.integer('course_type')
      table.string('member_password')
      table.timestamp('joined_at', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}