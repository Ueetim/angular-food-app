// class to hold foods
export class Food {
    id!: number;
    name !: string;
    tags?: string[];
    favorite: boolean = false;
    stars: number = 0;
    imageUrl!: string;
    origins!: string[];
    cookTime!: string;
}

// ?: means optional
// !: means mandatory