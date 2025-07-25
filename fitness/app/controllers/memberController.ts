import type { HttpContext } from '@adonisjs/core/http'
import MemberRepository from '../repository/MemberRepository.js';
import MembershipRepository from '../repository/MembershipRepository.js';
import { memberStoreSchema ,memberIdSchema, memberUpdateSchema} from '../validator/memberValidator.js';

export default class MemberController {
    async store({ request }:HttpContext ) {
        try {
            await console.log(request.body())
            const memberData = await memberStoreSchema.validate(request.body());
            const member = await MemberRepository.create(memberData);
            const joined_at = member.joinedAt;
            const n = member.course_type;
            const end_date = joined_at.plus({months:n});
            await MembershipRepository.create({
                m_id:memberData.member_id,
                start_date:joined_at,
                due_date: end_date
            })
            return {
                success: true,
                message: 'Member created successfully',
                member: member
            };
        }
        catch (error) {
            throw error
        }
    }

     async index({response}: HttpContext) {
        try{
            const members = await MemberRepository.fetchAll()
            return response.ok({
                success: true,
                member : members
            });
        }
        catch (error) {
            throw error
        }
    }

    async show({params}: HttpContext) {
        try{
            const payload = await memberIdSchema.validate(params)
            const members = await MemberRepository.fetchById(payload.member_id)
            return{
                success: true,
                member : members
            };
        }
        catch (error) {
            throw error
        }
    }

    async update({request,params}: HttpContext) {
        try{
            const payload = await memberIdSchema.validate(params)
            const memberData = await memberUpdateSchema.validate(request.body())
            const members = await MemberRepository.update(payload.member_id, memberData)
            return{
                success: true,
                member : members
            };
        }
        catch (error) {
            throw error
        }
    }

    async destroy({params}: HttpContext) {
        try{
            const payload = await memberIdSchema.validate(params)
            const members = await MemberRepository.delete(payload.member_id)
            return{
                success: true,
                messages: 'Member removed successfully',
                member : members
            };
        }
        catch (error) {
            throw error
        }
    }
}