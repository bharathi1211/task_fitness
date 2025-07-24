import vine from '@vinejs/vine'

export const classStoreSchema = vine.compile(
  vine.object({
  c_id: vine.number().exists(async (db, value) => {
    const exists = await db.from('classes').where('c_id', value).first()
    return !exists
  }),
  c_name:vine.string(),
  t_id:vine.number(),
  start_time:vine.string(),
  end_time:vine.string(),
  days:vine.array(vine.string()),
  price:vine.number(),
  total:vine.number(),
  count:vine.number()
}))

export const classIdSchema = vine.compile(
    vine.object({
    c_id: vine.number().exists(async (db, value) => {
      const exists = await db.from('classes').where('c_id', value).first()
      return !!exists
    })
  })
)

export const classUpdateSchema = vine.compile(
  vine.object({
  c_name:vine.string(),
  t_id:vine.number(),
  start_time:vine.string(),
  end_time:vine.string(),
  days:vine.array(vine.string()),
  price:vine.number(),
  total:vine.number(),
  count:vine.number()
}))