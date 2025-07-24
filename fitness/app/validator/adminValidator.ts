import vine from '@vinejs/vine'

export const adminIdSchema = vine.compile(
    vine.object({
    admin_id: vine.number().exists(async (db, value) => {
      const exists = await db.from('admins').where('admin_id', value).first()
      return !!exists
    })
  })
)