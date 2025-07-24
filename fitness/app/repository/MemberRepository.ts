import Member from "#models/member";
import { DateTime } from 'luxon';

export default class MemberRepository {
   static async create(memberData : any) {
      const member = await Member.create({
        member_id:memberData.member_id,
        member_name:memberData.member_name,
        member_age:memberData.member_age,
        member_contact:memberData.member_contact,
        course_type:memberData.course_type,
        member_password:memberData.member_password,
        joinedAt: DateTime.now()
        });
      return member;
  }
  static async fetchAll(){
      const members = await Member.all()
      return members;
  }
  
  static async fetchById(member_id: number){
      const member = await Member.findOrFail(member_id);
      return member;
  }

  static async update(member_id: number, memberData: any) {
    const member = await Member.findOrFail(member_id);
    member.merge(memberData);
    return member.save();
}

  static async delete(member_id: number) {
    const member = await Member.findOrFail(member_id);
    return member.delete();
  }
}