import {readInfoFromImageStealth} from './stealth_pnginfo.js'
import {PngIdentify} from './png.identify.js'

class StealthPngInfoParser {
    input: Uint8Array
    constructor(input: Uint8Array) {
        this.input = input
    }

    parse() {
        const pi = new PngIdentify(this.input)
        pi.parse()

        if (!pi.imageData) {
            throw new Error('cant parse imagefile')
        }

        if (pi.bitDepth !== 8 && pi.bitDepth !== 16) {
            throw new Error('unsupported bit depth:' + pi.bitDepth)
        }

        let stealthData = null
        switch(pi.colourType){
            case PngIdentify.ColourType.GRAYSCALE_WITH_ALPHA:
            case PngIdentify.ColourType.TRUECOLOR_WITH_ALPHA:
                stealthData = readInfoFromImageStealth(pi.pixels as any, pi.width, pi.height, true)
                break
            default:
                stealthData = readInfoFromImageStealth(pi.pixels as any, pi.width, pi.height, false)
                break
        }

        return {
            pngInfo: pi,
            stealthData
        }
    }
}

export {
    StealthPngInfoParser
}
