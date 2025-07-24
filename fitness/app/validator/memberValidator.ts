import vine from '@vinejs/vine'

export const memberStoreSchema = vine.compile(
  vine.object({
  member_name: vine.string().maxLength(100),
  member_contact: vine.string().maxLength(10),
  member_id: vine.number().exists(async (db, value) => {
    const exists = await db.from('members').where('member_id', value).first()
    return !exists
  }),
  member_age:vine.number(),
  course_type:vine.number(),
  member_password:vine.string()
}))

export const memberIdSchema = vine.compile(
    vine.object({
    member_id: vine.number().exists(async (db, value) => {
      const exists = await db.from('members').where('member_id', value).first()
      return !!exists
    })
  })
)

export const memberUpdateSchema = vine.compile(
  vine.object({
  member_name : vine.string().maxLength(100),
  member_age: vine.number(),
  member_contact:vine.string().maxLength(10),
  course_type:vine.number()
}))
