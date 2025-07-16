// export enum LocaleDirection {RTL='rtl',LTR='ltr'}
export default class LocaleDirection {
    private constructor(public readonly asString: string) {}

    static readonly RTL: LocaleDirection = new LocaleDirection('rtl')
    static readonly LTR: LocaleDirection = new LocaleDirection('ltr')

    get isRTL(): boolean {return this === LocaleDirection.RTL}

    get isLTR(): boolean {return this === LocaleDirection.LTR}
}