
import { BaseModel, column,belongsTo } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type {BelongsTo} from '@adonisjs/lucid/types/relations'
import Member from './member.js'

export default class Membership extends BaseModel {
  @column({ isPrimary: true ,serializeAs:'m_id'})
  declare m_id: number

  @column({serializeAs:'start_date'})
  declare start_date: DateTime

  @column({serializeAs:'due_date'})
  declare due_date: DateTime

  @belongsTo(()=> Member)
  declare member: BelongsTo<typeof Member>
}