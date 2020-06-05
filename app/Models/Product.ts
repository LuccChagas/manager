import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { productSIze } from '../Enum/productSize'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public product_id: number

  @column()
  public size: productSIze

  @column()
  public quantity: number


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
