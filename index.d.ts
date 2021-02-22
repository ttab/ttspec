export { TTVariantOfIPTCNinjsNewsInJSONVersion10 as TTNinjs10 } from './ttninjs_10'
export { TTVariantOfIPTCNinjsNewsInJSONVersion11 as TTNinjs11 } from './ttninjs_11'
export { TTVariantOfIPTCNinjsNewsInJSONVersion13 as TTNinjs13 } from './ttninjs_13'

export const enum Variant {
    Normal = "Normal",
    Watermark = "Watermark",
    BlackAndWhite = "BlackAndWhite",
    Cropped = "Cropped",
    Framegrab = "Framegrab",
    Web = "Web"
}

export const enum Usage {
    Thumbnail = "Thumbnail",
    Preview = "Preview",
    Hires = "Hires",
    Hidef = "Hidef",
    Lores = "Lores"
}

export const VARIANT: Array<Variant>
export const USAGE: Array<Usage>

export interface VariantUsage {
    variant: Variant,
    usage: Usage
}

export function variantUsageForString(str: string): VariantUsage
