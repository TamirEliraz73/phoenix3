export enum GradientType {From = "from", Via = "via", To = "to"}

export default class Color {
    private constructor(public readonly name: string) {}

    static create(name: string): Color {
        return new Color(name)
    }

    public get text(): string {
        return "text-" + this.name;
    }

    public get bg(): string {
        return "bg-" + this.name;
    }

    public static get bgGradient(): string {
        return "bg-gradient-to-br";
    }

    public get from(): string {
        return "from-" + this.name;
    }

    public get via(): string {
        return "via-" + this.name;
    }

    public get to(): string {
        return "to-" + this.name;
    }
}


// export enum Color {

// }