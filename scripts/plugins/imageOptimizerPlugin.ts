import path, { basename, extname } from 'node:path'

import { Plugin } from 'vite'
import sharp from 'sharp'

const pattern = /\?(optimized)(?:-mb-(\d+-\d+))?/

const isProd = process.env.NODE_ENV === 'production'
function isIdForOptimization(id: string) {
    return pattern.test(id)
}

const forSharpPatternTest = /\?(webp|avif|fallback)(?:-mb-(\d+-\d+))?/

function isIdForSharp(id: string | undefined) {
    return forSharpPatternTest.test(id || '')
}

function resolveId(id: string, importer: string) {
    return path.resolve(path.dirname(importer), id)
}

export const imageOptimizerPlugin = (): Plugin[] => {
    return [
        {
            name: '?sharp-handler',
            enforce: 'pre',
            async resolveId(id, importer) {
                if (!isIdForSharp(id)) return

                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                return resolveId(id, importer!)
            },
            async load(id) {
                if (!isIdForSharp(id)) return

                const unwrappedId = id.replace(forSharpPatternTest, '')
                const [, extension] = id.split('?')

                let buffer: Uint8Array
                const match = `?${extension}`.match(forSharpPatternTest)

                if (!match) {
                    return
                }

                let [, fileExtension, size = ''] = match

                const [width, height] = size.split('-')

                if (fileExtension === 'fallback') {
                    if (size) {
                        buffer = await sharp(unwrappedId)
                            .png({
                                quality: 100,
                                effort: 7,
                                compressionLevel: 7,
                            })
                            .resize({ width: +width, height: +height })
                            .toBuffer()
                    } else {
                        buffer = await sharp(unwrappedId)
                            .png({
                                quality: 70,
                                effort: 7,
                                compressionLevel: 6,
                            })
                            .toBuffer()
                    }
                } else if (fileExtension === 'webp') {
                    if (size) {
                        buffer = await sharp(unwrappedId)
                            .webp({ quality: 100 })
                            .resize({ width: +width, height: +height })
                            .toBuffer()
                    } else {
                        buffer = await sharp(unwrappedId)
                            .webp({ quality: 80 })
                            .toBuffer()
                    }
                } else {
                    if (size) {
                        buffer = await sharp(unwrappedId)
                            .avif({ quality: 100 })
                            .resize({ width: +width, height: +height })
                            .toBuffer()
                    } else {
                        buffer = await sharp(unwrappedId)
                            .avif({ quality: 60 })
                            .toBuffer()
                    }
                }

                if (fileExtension === 'fallback')
                    fileExtension = extname(unwrappedId).replace('.', '')

                const name =
                    basename(unwrappedId, extname(unwrappedId)) +
                    `.${fileExtension}`

                const referenceId = this.emitFile({
                    type: 'asset',
                    name: name,
                    needsCodeReference: true,
                    source: buffer,
                })

                return `export default import.meta.ROLLUP_FILE_URL_${referenceId};`
            },
        },
        {
            name: '?optimized-handler',
            enforce: 'pre',
            async resolveId(id, importer) {
                if (!isIdForOptimization(id)) return

                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                return resolveId(id, importer!)
            },
            async load(id) {
                if (!isIdForOptimization(id)) return

                const unwrappedId = id.replace(pattern, '')

                if (!isProd) {
                    return {
                        code:
                            `import fallback from "${unwrappedId}";` +
                            `export default { fallback };`,
                        map: null,
                    }
                }

                const [, , size = ''] = id.match(pattern) || []
                let webpMobile
                let avifMobile
                let fallbackMobile

                if (size) {
                    webpMobile = JSON.stringify(
                        `${unwrappedId}?webp-mb-${size}`
                    )
                    avifMobile = JSON.stringify(
                        `${unwrappedId}?avif-mb-${size}`
                    )
                    fallbackMobile = JSON.stringify(
                        `${unwrappedId}?fallback-mb-${size}`
                    )
                }

                const webp = JSON.stringify(`${unwrappedId}?webp`)
                const avif = JSON.stringify(`${unwrappedId}?avif`)
                const fallback = JSON.stringify(`${unwrappedId}?fallback`)

                if (size) {
                    return (
                        `import webp from ${webp};` +
                        `import webpMobile from ${webpMobile};` +
                        `import avif from ${avif};` +
                        `import avifMobile from ${avifMobile};` +
                        `import fallback from ${fallback};` +
                        `import fallbackMobile from ${fallbackMobile};` +
                        `export default {webp, webpMobile, avif, avifMobile, fallback, fallbackMobile};`
                    )
                }

                return (
                    `import webp from ${webp};` +
                    `import avif from ${avif};` +
                    `import fallback from ${fallback};` +
                    `export default {webp, avif, fallback};`
                )
            },
        },
    ]
}
