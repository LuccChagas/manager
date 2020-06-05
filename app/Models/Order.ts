import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product';

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public order_id: number


  @hasMany(() => Product)
  public product: HasMany<typeof Product>

  @column()
  public value: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
