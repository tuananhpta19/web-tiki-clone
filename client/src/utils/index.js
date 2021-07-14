export const handleURLImageUpload = (image) => {
    let urlImage = image.length ? image.map((infoImageItem) => {
        return infoImageItem
    }) : null;
    return urlImage;
}