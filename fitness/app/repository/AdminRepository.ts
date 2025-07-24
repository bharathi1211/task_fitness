import Admin from '#models/admin'

export default class AdminRepository {
      static async fetchById(admin_id: number){
          const admin = await Admin.findOrFail(admin_id);
          return admin;
      }
}