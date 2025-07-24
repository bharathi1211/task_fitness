import type { HttpContext } from "@adonisjs/core/http";
import { mStoreSchema ,mIdSchema,mUpdateSchema} from "../validator/membershipValidator.js";
import MembershipRepository from "../repository/MembershipRepository.js";

export default class MembershipController {
    async store({ request }:HttpContext ) {
        try {
            const mData = await mStoreSchema.validate(request.body());
            console.log(mData);
            const m = await MembershipRepository.create(mData);
            return {
                success: true,
                message: 'Member created successfully',
                membership: m
            };
        }
        catch (error) {
            throw error
        }
    }

     async index({response}: HttpContext) {
        try{
            const m = await MembershipRepository.fetchAll()
            return response.ok({
                success: true,
                membership : m
            });
        }
        catch (error) {
            throw error
        }
    }

    async show({params}: HttpContext) {
        try{
            const payload = await mIdSchema.validate(params)
            const m = await MembershipRepository.fetchById(payload.m_id)
            return{
                success: true,
                membership : m
            };
        }
        catch (error) {
            throw error
        }
    }

    async update({request,params}: HttpContext) {
        try{
            const payload = await mIdSchema.validate(params)
            const mData = await mUpdateSchema.validate(request.body())
            const m = await MembershipRepository.update(payload.m_id, mData)
            return{
                success: true,
                membership : m
            };
        }
        catch (error) {
            throw error
        }
    }

    async destroy({params}: HttpContext) {
        try{
            const payload = await mIdSchema.validate(params)
            const m = await MembershipRepository.delete(payload.m_id)
            return{
                success: true,
                messages: 'Member removed successfully',
                membership : m
            };
        }
        catch (error) {
            throw error
        }
    }
}