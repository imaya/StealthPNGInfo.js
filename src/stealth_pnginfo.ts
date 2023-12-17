//
// This TypeScript code is a port of the original python code.
// The original code can be found at https://github.com/ashen-sensored/sd_webui_stealth_pnginfo
//
import {default as zlib} from 'zlibjs/bin/gunzip.min.js'
const gunzip = zlib.Zlib.Gunzip

function readInfoFromImageStealth(pixels: Uint8Array, width: number, height: number, hasAlpha: boolean) {
    let mode: string | null = null
    let compressed = false
    let binaryData = ''
    let bufferA = ''
    let bufferRGB = ''
    let indexA = 0
    let indexRGB = 0
    let sigConfirmed = false
    let confirmingSignature = true
    let readingParamLength = false
    let readingParam = false
    let readEnd = false
    let paramLength = 0

    for (let x = 0; x < width; ++x) {
        for (let y = 0; y < height; ++y) {
            let r, g, b, a
            if (hasAlpha) {
                r = pixels[(y * width + x) * 4    ]
                g = pixels[(y * width + x) * 4 + 1]
                b = pixels[(y * width + x) * 4 + 2]
                a = pixels[(y * width + x) * 4 + 3]
                bufferA += a & 1
                indexA += 1
            } else {
                r = pixels[(y * width + x) * 3    ]
                g = pixels[(y * width + x) * 3 + 1]
                b = pixels[(y * width + x) * 3 + 2]
            }
            bufferRGB += r & 1
            bufferRGB += g & 1
            bufferRGB += b & 1
            indexRGB += 3

            if (confirmingSignature) {
                if (indexA === 'stealth_pnginfo'.length * 8) {
                    let decodedSig = ""
                    for (let i = 0, il = bufferA.length; i < il; i += 8) {
                        decodedSig += String.fromCharCode(parseInt(bufferA.slice(i, i+8), 2))
                    }

                    if (['stealth_pnginfo', 'stealth_pngcomp'].includes(decodedSig)) {
                        confirmingSignature = false
                        sigConfirmed = true
                        readingParamLength = true
                        mode = 'alpha'
                        if (decodedSig == 'stealth_pngcomp') {
                            compressed = true
                        }
                        bufferA = ''
                        indexA = 0
                    } else {
                        readEnd = true
                        break
                    }
                } else if (indexRGB == 'stealth_pnginfo'.length * 8) {
                    let decodedSig = ""
                    for (let i = 0, il = bufferRGB.length; i < il; i += 8) {
                        decodedSig += String.fromCharCode(parseInt(bufferRGB.slice(i, i+8), 2))
                    }

                    if (['stealth_rgbinfo', 'stealth_rgbcomp'].includes(decodedSig)) {
                        confirmingSignature = false
                        sigConfirmed = true
                        readingParamLength = true
                        mode = 'rgb'
                        if (decodedSig == 'stealth_rgbcomp') {
                            compressed = true
                        }
                        bufferRGB = ''
                        indexRGB = 0
                    }
                }
            } else if (readingParamLength) {
                if (mode == 'alpha') {
                    if (indexA == 32) {
                        paramLength = parseInt(bufferA, 2)
                        readingParamLength = false
                        readingParam = true
                        bufferA = ''
                        indexA = 0
                    }
                } else {
                    if (indexRGB == 33) {
                        const pop = bufferRGB.slice(-1)
                        bufferRGB = bufferRGB.slice(0, -1)
                        paramLength = parseInt(bufferRGB, 2)
                        readingParamLength = false
                        readingParam = true
                        bufferRGB = pop
                        indexRGB = 1
                    }
                }
            } else if (readingParam) {
                if (mode == 'alpha') {
                    if (indexA == paramLength) {
                        binaryData = bufferA
                        readEnd = true
                        break
                    }
                } else {
                    if (indexRGB >= paramLength) {
                        const diff = paramLength - indexRGB
                        if (diff < 0) {
                            bufferRGB = bufferRGB.slice(0, diff)
                        }
                        binaryData = bufferRGB
                        readEnd = true
                        break
                    }
                }
            } else {
                // impossible
                readEnd = true
                break
            }
        }
        if (readEnd) {
            break
        }
    }

    if (sigConfirmed && binaryData !== '') {
        let byteData = new Uint8Array(binaryData.length / 8 | 0)
        for (let i = 0, il = binaryData.length / 8 | 0; i < il; ++i) {
            byteData[i] += parseInt(binaryData.slice(i*8, i*8+8), 2)
        }

        let decodedData
        if (compressed) {
            decodedData = new gunzip(byteData).decompress()
        } else {
            decodedData = byteData
        }

        const chars: string[] = []
        for (let i = 0, il = decodedData.length; i < il; ++i) {
            chars.push(String.fromCharCode(decodedData[i]))
        }

        return chars.join('')
    }
    return null
}

export {
    readInfoFromImageStealth
}