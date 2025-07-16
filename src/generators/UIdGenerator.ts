export default class UIdGenerator {
    private static _id: number = -1;

    public static generate(): number {return ++UIdGenerator._id}
}