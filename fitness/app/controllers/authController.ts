import type { HttpContext } from '@adonisjs/core/http'
import jwt, { Secret } from 'jsonwebtoken'
import Member from '#models/member'

export default class AuthController {
  public async login({ request, response }: HttpContext) {
    const { member_id, member_password } = request.only(['member_id', 'member_password'])

    const m = await Member.query().where('member_id', member_id).first()

    if (!m || m.member_password !== member_password) {
      return response.unauthorized({ message: 'Invalid credentials' })
    }

    const secret: Secret = process.env.JWT_SECRET || 'fallback_secret'

    const token = jwt.sign(
      { id: m.member_id},
      secret
    )

    return response.ok({
      token,
      message: 'Login successful',
    })
  }
}
