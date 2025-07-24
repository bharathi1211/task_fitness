import Class from "#models/class";

export default class ClassRepository {
   static async create(classData : any) {
      const c = await Class.create({
        c_id:classData.c_id,
        c_name:classData.c_name,
        t_id:classData.t_id,
        start_time:classData.start_time,
        end_time:classData.end_time,
        days:classData.days,
        price:classData.price,
        total:classData.total,
        count:classData.count
        });
      return c;
  }
  static async fetchAll(){
      const c = await Class.all()
      return c;
  }
  
  static async fetchById(c_id: number){
      const c = await Class.findOrFail(c_id);
      return c;
  }

  static async update(c_id: number, classData: any) {
    const c = await Class.findOrFail(c_id);
    c.merge(classData);
    return c.save();
}

  static async delete(c_id: number) {
    const c = await Class.findOrFail(c_id);
    return c.delete();
  }
}