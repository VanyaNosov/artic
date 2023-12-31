import { ReactElement, useEffect, useRef } from 'react'
// @ts-expect-error: there is no declaration for this pollyfill
import loadingAttributePolyfill from 'loading-attribute-polyfill/dist/loading-attribute-polyfill.module.js'
import ReadDOMServer from 'react-dom/server'
export const LoadingAttrPolyfill = (props: { children: ReactElement }) => {
    const { children } = props
    const staticMarkup = ReadDOMServer.renderToStaticMarkup(children)
    const noScriptRef = useRef(null)

    useEffect(() => {
        if (noScriptRef.current) {
            loadingAttributePolyfill.prepareElement(noScriptRef.current)
        }
    }, [])

    return (
        <noscript
            ref={noScriptRef}
            dangerouslySetInnerHTML={{ __html: staticMarkup }}
        />
    )
}
