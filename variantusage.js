//
// TT Variants and Usage
//
// Renditions of media are defined using a system of Variant/Usage
// combos. A combo is often written together as "NormalHires" meaning
// the "Normal" variant of the "Hires" usage rendition.
//
// Common combinations:
//
// NormalHires     - most objects will have one or more of these as the main rendition.
// WatermarkHires  - image objects often have a watermarked variant.
// NormalPreview   - often (uncropped) preview images. but also preview video.
// NormalThumbnail - (uncropped) thumbnail size images.
//
// Hires is our "standard" usage.
// Hidef is used for HD video 1080p.
//

var VARIANT = ['Normal', 'Watermark', 'BlackAndWhite', 'Cropped', 'Framegrab', 'Web'];
var USAGE =   ['Thumbnail', 'Preview', 'Hires', 'Hidef', 'Lores'];

module.exports = {

  VARIANT: VARIANT,
  USAGE:   USAGE,

  // helper method to split a string such as "NormalHires" into
  // the constituent parts {variant:"Normal", usage:"Hires"}.
  variantUsageForString: function(str) {
    var lcstr = str.toLowerCase();
    var i, variant, usage;
    for (i = 0; i < VARIANT.length; i++) {
      if (lcstr.indexOf(VARIANT[i].toLowerCase()) == 0) {
        variant = VARIANT[i];
        break;
      }
    }
    if (variant) {
      var vlen = variant.length;
      for (i = 0; i < USAGE.length; i++) {
        if (lcstr.indexOf(USAGE[i].toLowerCase(), vlen) == vlen) {
          usage = USAGE[i];
          break;
        }
      }
    }
    if (variant && usage) {
      return {variant:variant, usage:usage};
    } else {
      return {variant:null, usage:null};
    }
  }

};
