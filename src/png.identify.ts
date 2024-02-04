/**
 * png file viewer in JavaScript
 *
 * The MIT License
 *
 * Copyright (c) 2012 imaya
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @fileoverview png file viewer in JavaScript.
 */

import {default as zlib} from 'zlibjs/bin/inflate.min.js'

type PngIdentifyBufferType = number[] | Uint8Array
type PngIdentifyPixelsType = number[] | Uint8Array | Uint16Array
type PngIdentifyInputType = PngIdentifyBufferType
type PngIdentifyChunk = {
  type: string,
  position: number,
  size: number,
}

class PngIdentify {
  input: PngIdentifyInputType
  //cssPrefix?: string
  //blockInfo: Object[]
  //zlibstat: ZlibStat.Inflate
  imageData?: PngIdentifyBufferType
  idat?: PngIdentifyBufferType // joined idat chunks
  width: number
  height: number
  bitDepth: number
  colourType: number
  compressionMethod: number
  filterMethod: number
  interlaceMethod: number
  //histgram: PngIdentifyBufferType
  filters: number[]
  chunks: PngIdentifyChunk[]
  pos: number
  palette: PngIdentifyBufferType[]
  filterCount: number[]
  pixels?: PngIdentifyPixelsType

  constructor(input: PngIdentifyInputType) {
    this.input = input;
    this.chunks = [] as PngIdentifyChunk[]
    this.filters = []

    this.width = -1
    this.height = -1
    this.bitDepth = -1
    this.colourType = -1
    this.compressionMethod = -1
    this.filterMethod = -1
    this.interlaceMethod = -1
    //histgram: PngIdentifyBufferType
    this.pos = -1
    this.palette = []
    this.filterCount = []
  }

  
  static isPNG(data: PngIdentifyBufferType) {
    for (let i = 0, il = PngIdentify.Signature.length; i < il; ++i) {
      if (data[i] !== PngIdentify.Signature[i]) {
        return false
      }
    }

    return true
  }

  /**
   * get pixel line filters.
   */
  getFilters(data: PngIdentifyBufferType) {
    let length: number
    let rowFilters: number[] = []
    let pos: number
    let row: number
    let scanlineLength: number

    if (data.length === 0) {
      return [];
    }

    scanlineLength = (this.getByteLength(this.colourType) * this.bitDepth * this.width + 7) / 8 | 0

    length = data.length;

    for (pos = 0, row = 0; pos < length; pos += scanlineLength) {
      rowFilters[row++] = data[pos++];
    }

    this.filters = rowFilters;

    return rowFilters;
  }

  getChunkData(chunk: PngIdentifyChunk) {
    const pos = chunk.position + 8
    return subarray(this.input, pos, pos + chunk.size)
  }

  /**
   * parse png chunks
   */
  parse() {
    const data = this.input
    var chunk = this.chunks = [] as PngIdentifyChunk[]
    var chunkSize: number
    var section: string // chunk type
    var pos: number
    /*
    var crc32a: number
    var crc32b: number
    */
    var idat: PngIdentifyBufferType
    var idatLength = 0
    var idatChunk: PngIdentifyBufferType
    var idatChunks: PngIdentifyBufferType[] = []
    var palette = this.palette = [] as PngIdentifyBufferType[]
    /*
    // @type {!(Array.<number>|Uint8Array)}
    var histogram;
    // @type {number}
    var histogramTotal;
    */

    if (!PngIdentify.isPNG(data)) {
      throw new Error('invalid png file');
    }

    this.pos = 8;

    while (true) {
      // chunk position
      pos = this.pos;

      // chunk size
      chunkSize = (
          (data[this.pos++] << 24) | (data[this.pos++] << 16) |
          (data[this.pos++] <<  8) | (data[this.pos++]      )
      ) >>> 0;

      // chunk type
      section = (() => {
        var section: string[] = [];
        for (let i = 0; i < 4; i++) {
          section.push(String.fromCharCode(data[this.pos++]));
        }
        return section.join('');
      })()

      // crc32-a
      /*
      crc32a = Zlib.CRC32.calc(
        USE_TYPEDARRAY ?
        data.subarray(this.pos - 4, this.pos + chunkSize) :
        data.slice(this.pos - 4, this.pos + chunkSize)
      );
      */

      // idat
      switch (section) {
        case 'IHDR':
          this.width = (
              (data[this.pos++] << 24) | (data[this.pos++] << 16) |
              (data[this.pos++] <<  8) | (data[this.pos++]      )
          ) >>> 0;
          this.height = (
              (data[this.pos++] << 24) | (data[this.pos++] << 16) |
              (data[this.pos++] <<  8) | (data[this.pos++]      )
          ) >>> 0;
          this.bitDepth = data[this.pos++];
          this.colourType = data[this.pos++];
          this.compressionMethod = data[this.pos++];
          this.filterMethod = data[this.pos++];
          this.interlaceMethod = data[this.pos++];
          break;
        case 'IDAT':
          idatChunks.push(subarray(data, this.pos, this.pos += chunkSize))
          idatLength += chunkSize;
          break;
        case 'PLTE':
          for (let i = 0, j = 0; i < chunkSize; i += 3) {
            palette[j++] =
              [data[this.pos++], data[this.pos++], data[this.pos++], 255];
          }
          break;
        case 'tRNS':
          if (this.colourType === PngIdentify.ColourType['INDEXED_COLOR']) {
            for (let i = 0, il = chunkSize; i < il; ++i) {
              palette[i][3] = data[this.pos++];
            }
          }
          break;
        default:
          this.pos += chunkSize;
          break;
      }

      // crc32-b
      const crc32b = (
        (data[this.pos++] << 24) | (data[this.pos++] << 16) |
        (data[this.pos++] <<  8) | (data[this.pos++]      )
      ) >>> 0;
      chunk.push({
        'type': section,
        'size': chunkSize,
        /*
        'crc32': [
          uint32ToHexString(crc32b),
          'verify: ' + (crc32a === crc32b)
        ].join(' / '),
        */
        'position': pos
      });

      if (section === 'IEND') {
        break;
      }
    }

    // join idat
    idat = this.idat = new Uint8Array(idatLength);
    for (let pos = 0, i = 0, il = idatChunks.length; i < il; ++i) {
      idatChunk = idatChunks[i];
      for (let j = 0, jl = idatChunk.length; j < jl; ++j) {
        idat[pos++] = idatChunk[j]
      }
    }

    // decompress image data

    this.imageData = (new zlib.Zlib.Inflate(idat)).decompress();
    //this.imageData = (this.zlibstat = new ZlibStat.Inflate(idat)).decompress();
    //this.blockInfo = this.zlibstat.getBlocks();

    // color histogram
    /*
    TODO: bit depth とフィルタを考慮したデコードを行っていないため凍結
    if (this.colourType === PngIdentify.ColourType.INDEXED_COLOR) {
      histogramTotal = 0;
      idat = this.imageData;
      histogram = this.histogram =
        new (USE_TYPEDARRAY ? Uint32Array : Array)(palette.length);
      if (USE_TYPEDARRAY) {
        for (i = 0, il = idat.length; i < il; ++i) {
          ++histogram[idat[i]];
          ++histogramTotal;
        }
      } else {
        for (i = 0, il = idat.length; i < il; ++i) {
          histogram[idat[i]] = (histogram[idat[i]] | 0) + 1;
          ++histogramTotal;
        }
      }
    }
    */

    const pixels = this.parseImageData()
    this.pixels = pixels

    return chunk;
  }

  parseImageData() {
    const imageData = this.imageData!
    const width = this.width
    const height = this.height
    let inputPos = 0
    let pixelsPos = 0
    let size = width * height

    const pixelLength = (this.getByteLength(this.colourType) * this.bitDepth) / 8 | 0
    const scanlineLength = (this.getByteLength(this.colourType) * this.bitDepth * this.width + 7) / 8 | 0
    let filter = -1

    let pixels = new (this.bitDepth === 16 ? Uint16Array : Uint8Array)(size * this.getByteLength(this.colourType))
    const getPixelIndex = (x: number, y: number) => {
      return (y * width + x) * pixelLength
    }

    const mask = (1 << this.bitDepth) - 1
    for (let y = 0; y < height; ++y) {
      filter = imageData[inputPos++]
      const startPos = inputPos
      
      switch (filter) {
        case 0: // NONE
          for (let x = 0; x < width; ++x) {
            for (let i = 0; i < pixelLength; ++i) {
              pixels[pixelsPos++] = imageData[inputPos++]
            }
          }
          break
        case 1: // SUB
          for (let x = 0; x < width; ++x) {
            for (let i = 0; i < pixelLength; ++i) {
              if (x === 0) {
                pixels[pixelsPos++] = imageData[inputPos++] 
              } else {
                pixels[pixelsPos++] = (
                  imageData[inputPos++] + pixels[getPixelIndex(x - 1, y) + i] 
                ) & mask
              }
            }
          }
          break
        case 2: // UP
          for (let x = 0; x < width; ++x) {
            for (let i = 0; i < pixelLength; ++i) {
              if (y === 0) {
                pixels[pixelsPos++] = imageData[inputPos++] 
              } else {
                pixels[pixelsPos++] = (
                  imageData[inputPos++] + pixels[getPixelIndex(x, y-1) + i] 
                ) & ((1 << this.bitDepth) - 1)
              }
            }
          }
          break
        case 3: // AVERAGE
          for (let x = 0; x < width; ++x) {
            for (let i = 0; i < pixelLength; ++i) {
              const prevX = (x === 0) ? 0 : pixels[getPixelIndex(x-1, y) + i]
              const prevY = (y === 0) ? 0 : pixels[getPixelIndex(x, y-1) + i]

              pixels[pixelsPos++] = (
                imageData[inputPos++] + ((prevX + prevY) >>> 1)
              ) & ((1 << this.bitDepth) - 1)
            }
          }
          break
        case 4: // PAETH
          for (let x = 0; x < width; ++x) {
            for (let i = 0; i < pixelLength; ++i) {
              const left   = (x === 0)            ? 0 : pixels[getPixelIndex(x-1, y  ) + i]
              const up     = (y === 0)            ? 0 : pixels[getPixelIndex(x  , y-1) + i]
              const leftup = (x === 0 || y === 0) ? 0 : pixels[getPixelIndex(x-1, y-1) + i]
              const paeth = this.paethPredictor(left, up, leftup)

              pixels[pixelsPos++] = (
                imageData[inputPos++] + paeth
              ) & ((1 << this.bitDepth) - 1)
            }
          }
          break
        default:
          throw new Error("invalid filter type:" + filter)
      }
      inputPos = startPos + scanlineLength
      //throw new Error("tmp")
    }

    return pixels
  }

  paethPredictor(a: number, b: number, c: number) {
    const p = a + b - c
    const pa = Math.abs(p - a)
    const pb = Math.abs(p - b)
    const pc = Math.abs(p - c)

    return (pa <= pb && pa <= pc) ? a : (pb <= pc) ? b : c;
  }

  /**
   * PNG Signature
   * @const
   * @type {!Array.<number>}
   */
  static Signature = [137, 80, 78, 71, 13, 10, 26, 10]

  /**
   * 基本となる 5 種類のフィルタ
   */
  static BasicFilterType = {
    'UNKNOWN': -2,
    'NONE': 0,
    'SUB': 1,
    'UP': 2,
    'AVERAGE': 3,
    'PAETH': 4,
    'MIXED': -1
  }

  /**
   * 圧縮フラグ
   * @enum {number}
   */
  static CompressionFlag = {
    'UNCOMPRESSED': 0,
    'COMPRESSED': 1
  }

  /**
   * 圧縮方法
   * 現在は Deflate 圧縮のみ定義されている
   * @enum {number}
   */
  static CompressionMethod = {
    'DEFLATE': 0
  };

  /**
   * 色空間の定義
   * 1 ビット目(0x01)が立っていればパレット使用,
   * 2 ビット目(0x02)が立っていればカラー,
   * 3 ビット目(0x04)が立っていればαチャンネル付き
   * @enum {number}
   */
  static ColourType = {
    'GRAYSCALE': 0,
    'TRUECOLOR': 2,
    'INDEXED_COLOR': 3,
    'GRAYSCALE_WITH_ALPHA': 4,
    'TRUECOLOR_WITH_ALPHA': 6
  }

  /**
   * フィルタ方法
   * 現在は 0 の基本 5 種類のフィルタのみ定義
   * @enum {number}
   */
  static FilterMethod = {
    'BASIC': 0
  }

  /**
   * インタレース方法
   * @enum {number}
   */
  static InterlaceMethod = {
    'NONE': 0,
    'ADAM7': 1
  }

  /**
   * Rendering intent for Standard RGB colour space
   * @enum {number}
   */
  static RenderingIntent = {
    'PERCEPTUAL': 0,
    'RELATIVE': 1,
    'SATURATION': 2,
    'ABSOLUTE': 3
  }

  /**
   * Unit Specifier for Physical pixel dimensions
   * @enum {number}
   */
  static UnitSpecifier = {
    'UNKNOWN': 0,
    'METRE': 1
  }

  /**
   * @enum {Object}
   */
  static Resource = {
    BasicFilterType: enumToResource(PngIdentify.BasicFilterType),
    CompressionFlag: enumToResource(PngIdentify.CompressionFlag),
    CompressionMethod: enumToResource(PngIdentify.CompressionMethod),
    ColourType: enumToResource(PngIdentify.ColourType),
    FilterMethod: enumToResource(PngIdentify.FilterMethod),
    InterlaceMethod: enumToResource(PngIdentify.InterlaceMethod),
    RenderingIntent: enumToResource(PngIdentify.RenderingIntent),
    UnitSpecifier: enumToResource(PngIdentify.UnitSpecifier)
  }

  /**
   * update filter information
   */
  updateFilterInfo() {
    var filters, filterCount: number[],
        prevFilter, filterMode = PngIdentify.BasicFilterType['UNKNOWN'],
        i, il;

    if (!this.imageData) {
      throw new Error("imageData is not found")
    }

    // get filter information
    filters = this.getFilters(this.imageData);
    this.filters = filters;

    // filter counting
    filterCount = [];
    for (i = 0, il = filters.length; i < il; i++) {
      // detect mixed
      if (i === 0) {
        prevFilter = filters[i];
      }
      if (prevFilter !== filters[i]) {
        filterMode = PngIdentify.BasicFilterType['MIXED'];
      }
      prevFilter = filters[i];

      // counting
      filterCount[filters[i]] = (filterCount[filters[i]] >>> 0) + 1;
    }

    // filter mode
    //this.filterMode = filterMode;
    if (filterMode !== PngIdentify.BasicFilterType['MIXED'] && filters.length > 0) {
    // this.filterMode = filters[0];
    }

    // filter count
    if (filterMode === PngIdentify.BasicFilterType['MIXED']) {
      this.filterCount = filterCount;
    }
  }
  
  getByteLength(colourType: number) {
    switch (colourType) {
      case PngIdentify.ColourType['GRAYSCALE']:
      case PngIdentify.ColourType['INDEXED_COLOR']:
        return 1;
      case PngIdentify.ColourType['GRAYSCALE_WITH_ALPHA']:
        return 2;
      case PngIdentify.ColourType['TRUECOLOR']:
        return 3;
      case PngIdentify.ColourType['TRUECOLOR_WITH_ALPHA']:
        return 4;
      default:
        throw new Error("Invalid ColourType:" + colourType)
    }
  }
}

/**
 * enum to resource object.
 * @param {!Object} en enum object.
 * @return {!Object} resource object.
 */
function enumToResource(en: Object) {
  var obj, keys, key, value, i, l;

  obj = reverseKeyValue_(en);
  keys = Object.keys(obj);

  for (i = 0, l = keys.length; i < l; i++) {
    key = keys[i];
    value = obj[key];

    obj[key] = value[0].toUpperCase().charAt(0) +
      value.toLowerCase().substr(1);
  }

  return obj;
}

/**
 * from key-value to value-key.
 * @param {!Object} object target object.
 * @return {!Object} new object.
 */
function reverseKeyValue_(object: any) {
  /** @type {!Object} */
  var newObject: any = {};
  /** @type {Array.<string>} */
  var keys = Object.keys(object);
  /** @type {number} */
  var i;
  /** @type {number} */
  var il;

  for (i = 0, il = keys.length; i < il; i++) {
    newObject[object[keys[i]]] = keys[i];
  }

  return newObject;
}

/**
 * unsigned 32-bit integer to hex string.
 * @param {number} uint32 unsigned 32-bit interger.
 * @return {string} hex string.
 */
function uint32ToHexString(uint32: number) {
  /** @type {string} */
  var hex = '0123456789ABCDEF';

  return hex[uint32 >>> 28 & 0x0F] + hex[uint32 >>> 24 & 0x0F] +
         hex[uint32 >>> 20 & 0x0F] + hex[uint32 >>> 16 & 0x0F] +
         hex[uint32 >>> 12 & 0x0F] + hex[uint32 >>> 8 & 0x0F] +
         hex[uint32 >>> 4 & 0x0F] + hex[uint32 >>> 0 & 0x0F];
}

function subarray(arrayLike: PngIdentifyBufferType, ...args: any[]) {
  if (arrayLike instanceof Uint8Array) {
    return arrayLike.subarray(...args)
  } else if (typeof arrayLike.slice === 'function') {
    return arrayLike.slice(...args)
  } else {
    throw new Error("invalid argument: arrayLike.slice is not callable")
  }
}



//-----------------------------------------------------------------------------
// export
//-----------------------------------------------------------------------------
export {
  PngIdentify
}

/* vim:set expandtab ts=2 sw=2: */
