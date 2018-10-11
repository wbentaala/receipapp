export class Ingredient{
    ingredient: string;
    measure: string;
}

export class Instruction{
    instruction: string;
    photo: string;
}


export class Recipe{
    
    public title: string;
    public description: string; 
    public feeds_this_many: number; 
    public preparation_time: number;
    public ingredients: Ingredient[];
    public instructions: Instruction[];
    public cover_photo: string;

    constructor(t: string, d: string, ingr: Ingredient[], instr: Instruction[], cp: string, feeds: number, pt: number){
        this.title = t;
        this.description = d;
        this.ingredients = ingr;
        this.instructions = instr;
        this.cover_photo = cp;
        this.feeds_this_many = feeds;
        this.preparation_time = pt;
    }

    public static createEmptyRecipe(){
        return new Recipe("", "", null, null, "", 1, 1);
    }

    
}