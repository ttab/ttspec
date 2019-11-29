export { TTVariantOfIPTCNinjsNewsInJSONVersion10 as TTNinjs10 } from './ttninjs_10'
export { TTVariantOfIPTCNinjsNewsInJSONVersion11 as TTNinjs11 } from './ttninjs_11'

export enum VARIANT {
    Normal = "Normal",
    Watermark = "Watermark",
    BlackAndWhite = "BlackAndWhite",
    Cropped = "Cropped",
    Framegrab = "Framegrab",
    Web = "Web"
}
export enum USAGE {
    Thumbnail = "Thumbnail",
    Preview = "Preview",
    Hires = "Hires",
    Hidef = "Hidef",
    Lores = "Lores"
}

export interface VariantUsage {
    variant: VARIANT,
    usage: USAGE
}

export function variantUsageForString(str: string): VariantUsage
