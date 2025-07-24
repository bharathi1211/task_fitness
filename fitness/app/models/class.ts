
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Class extends BaseModel {
  @column({ isPrimary: true })
  declare c_id: number

  @column()
  declare c_name:string

  @column()
  declare t_id:number

  @column()
  declare start_time:string

  @column()
  declare end_time:string

  @column()
  declare days:string[]

  @column()
  declare price:number

  @column()
  declare total:number

  @column()
  declare count:number

}