export type TranslationModule = { default: Record<string, string> } | Record<string, string>
export function isModuleWithDefault(obj: any): obj is { default: Record<string, string> } {
    return obj && typeof obj === 'object' && 'default' in obj
}