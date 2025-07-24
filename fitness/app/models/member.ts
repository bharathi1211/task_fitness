
import { BaseModel, column ,hasOne} from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type {HasOne} from '@adonisjs/lucid/types/relations'
import Membership from './membership.js'

export default class Member extends BaseModel {
  @column({ isPrimary: true , serializeAs:'member_id'})
  declare member_id: number

  @column({serializeAs:'member_name'})
  declare member_name:string

  @column({serializeAs:'member_age'})
  declare member_age:number

  @column({serializeAs:'member_contact'})
  declare member_contact:string

  @column({serializeAs:'course_type'})
  declare course_type:number

  @column({serializeAs:'member_password'})
  declare member_password:string

  @column.dateTime({ autoCreate: true, serializeAs: 'joined_at' })
  declare joinedAt: DateTime

  @hasOne(() => Membership)
  declare membership: HasOne<typeof Membership>
}