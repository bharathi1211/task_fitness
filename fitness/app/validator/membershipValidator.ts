import vine from '@vinejs/vine'

export const mStoreSchema = vine.compile(
  vine.object({
  m_id: vine.number().exists(async (db, value) => {
    const exists = await db.from('memberships').where('m_id', value).first()
    return !exists
  }),
  start_date:vine.date(),
  due_date:vine.date()
}))

export const mIdSchema = vine.compile(
    vine.object({
    m_id: vine.number().exists(async (db, value) => {
      const exists = await db.from('memberships').where('m_id', value).first()
      return !!exists
    })
  })
)

export const mUpdateSchema = vine.compile(
  vine.object({
  start_date:vine.date(),
  due_date:vine.date()
}))