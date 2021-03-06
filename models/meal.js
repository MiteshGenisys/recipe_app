class Meal {
    constructor(id, 
                categoryIds, 
                title, 
                affordability, 
                complexity, 
                imageUrl, 
                duration, 
                ingredients, 
                steps, 
                isGlutenFree, 
                isVegen, 
                isVegetarian, 
                isLactoseFree
               ) {
                    this.id = id;
                    this.categoryIds = categoryIds;
                    this.title = title;
                    this.imageUrl = imageUrl;
                    this.ingredients = ingredients;
                    this.affordability = affordability;
                    this.complexity = complexity;
                    this.duration = duration;
                    this.steps = steps;
                    this.isGlutenFree = isGlutenFree;
                    this.isVegen = isVegen;
                    this.isVegetarian = isVegetarian;
                    this.isLactoseFree = isLactoseFree;
                }
}

export default Meal;