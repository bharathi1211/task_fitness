import type { HttpContext } from "@adonisjs/core/http";
import { classStoreSchema ,classIdSchema,classUpdateSchema} from "../validator/classValidator.js";
import ClassRepository from "../repository/ClassRepository.js";

export default class ClassController {
    async store({ request }:HttpContext ) {
        try {
            const classData = await classStoreSchema.validate(request.body());
            const classs = await ClassRepository.create(classData);
            return {
                success: true,
                message: 'Class created successfully',
                class: classs
            };
        }
        catch (error) {
            throw error
        }
    }

     async index({response}: HttpContext) {
        try{
            console.log("inside index");
            const c = await ClassRepository.fetchAll()
            console.log(c);
            return response.ok({
                success: true,
                class : c
            });
        }
        catch (error) {
            throw error
        }
    }

    async show({params}: HttpContext) {
        try{
            const payload = await classIdSchema.validate(params)
            const c = await ClassRepository.fetchById(payload.c_id)
            return{
                success: true,
                class : c
            };
        }
        catch (error) {
            throw error
        }
    }

    async update({request,params}: HttpContext) {
        try{
            const payload = await classIdSchema.validate(params)
            const classData = await classUpdateSchema.validate(request.body())
            const c = await ClassRepository.update(payload.c_id, classData)
            return{
                success: true,
                class : c
            };
        }
        catch (error) {
            throw error
        }
    }

    async destroy({params}: HttpContext) {
        try{
            const payload = await classIdSchema.validate(params)
            const c = await ClassRepository.delete(payload.c_id)
            return{
                success: true,
                messages: 'Class removed successfully',
                class : c
            };
        }
        catch (error) {
            throw error
        }
    }
}