import imageUrlBuilder from '@sanity/image-url'
const client = require('@sanity/client')({
  projectId: 'rxa1mevp',
  dataset: 'production',
  useCdn: true
})

const urlBuilder = imageUrlBuilder(client)

export default function urlFor(image) {
  let uncroppedHeight = image.asset.metadata.dimensions.height
  let uncroppedWidth = image.asset.metadata.dimensions.width

  if(image.crop != null){
    let cropBottomPixels = Math.round(image.crop.bottom * uncroppedHeight)
    let cropLeftPixels = Math.round(image.crop.left * uncroppedWidth)
    let cropRightPixels = Math.round(image.crop.right * uncroppedWidth)
    let cropTopPixels = Math.round(image.crop.top * uncroppedHeight)

    let croppedHeight = Math.round(uncroppedHeight - cropBottomPixels - cropTopPixels)
    let croppedWidth = Math.round(uncroppedWidth - cropLeftPixels - cropRightPixels)

    return urlBuilder.image(image.asset._id).auto("format").rect(cropLeftPixels, cropTopPixels, croppedWidth, croppedHeight)
  }
  else {
    return urlBuilder.image(image.asset._id).auto("format")
  }
}
