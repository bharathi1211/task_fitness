import Membership from "#models/membership";

export default class MembershipRepository {
   static async create(mData : any) {
      const m = await Membership.create({
        m_id:mData.m_id,
        start_date:mData.start_date,
        due_date:mData.due_date
        });
      return m;
  }
  static async fetchAll(){
      const m = await Membership.all()
      return m;
  }
  
  static async fetchById(m_id: number){
      const m = await Membership.findOrFail(m_id);
      return m;
  }

  static async update(m_id: number, mData: any) {
    const m = await Membership.findOrFail(m_id);
    m.merge(mData);
    return m.save();
}

  static async delete(m_id: number) {
    const m = await Membership.findOrFail(m_id);
    return m.delete();
  }
}