import { FC, ImgHTMLAttributes } from 'react'
import { LoadingAttrPolyfill } from '@/shared/ui/Image/LoadingAttrPolyfill.tsx'

export interface OptimizedSrc {
    avif?: string
    avifMobile?: string
    webp?: string
    webpMobile?: string
    fallback: string
    fallbackMobile?: string
}

interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
    className?: string
    src: OptimizedSrc | string
}

export const Image: FC<ImageProps> = ({ className, src, ...props }) => {
    const getSourceSrc = (src: ImageProps['src']) => {
        if (typeof src === 'string') {
            return { fallback: src }
        }

        return src
    }

    const sources = getSourceSrc(src)

    const content = (
        <picture>
            {sources.webp && (
                <source
                    srcSet={sources.webp}
                    media={
                        sources.webpMobile ? '(min-width: 601px)' : undefined
                    }
                    type="image/webp"
                />
            )}
            {sources.webpMobile && (
                <source
                    srcSet={sources.webpMobile}
                    media="(max-width: 600px)"
                    type="image/webp"
                />
            )}
            {sources.avif && (
                <source
                    srcSet={sources.avif}
                    media={
                        sources.avifMobile ? '(min-width: 601px)' : undefined
                    }
                    type="image/avif"
                />
            )}
            {sources.avifMobile && (
                <source
                    srcSet={sources.avifMobile}
                    media="(max-width: 600px)"
                    type="image/avif"
                />
            )}
            {sources.fallbackMobile && (
                <source
                    srcSet={sources.fallbackMobile}
                    media="(max-width: 600px)"
                />
            )}
            <img src={sources.fallback} className={className} {...props} />
        </picture>
    )

    if (props.loading === 'lazy') {
        return <LoadingAttrPolyfill>{content}</LoadingAttrPolyfill>
    }

    return content
}
