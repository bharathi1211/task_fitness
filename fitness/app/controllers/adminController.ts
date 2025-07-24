import type { HttpContext } from '@adonisjs/core/http'
import { adminIdSchema } from '../validator/adminValidator.js';
import AdminRepository from '../repository/AdminRepository.js';

export default class AdminController {
async show({params}: HttpContext) {
        try{
            const payload = await adminIdSchema.validate(params)
            const admin = await AdminRepository.fetchById(payload.admin_id)
            return{
                success: true,
                admin : admin
            };
        }
        catch (error) {
            throw error
        }
    }
}