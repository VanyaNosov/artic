// Common type for optimized images
type OptimizedImage = {
    webp?: string
    webpMobile?: string
    avif?: string
    avifMobile?: string
    fallback: string
    fallbackMobile: string
}

// Declare module for *?optimized
declare module '*?optimized' {
    const value: OptimizedImage
    export default value
}

// Declare module for *?optimized-mb-* with a more permissive type
declare module '*?optimized-mb-*' {
    const value: {
        [key: string]: string | undefined
    }
    export default value
}
