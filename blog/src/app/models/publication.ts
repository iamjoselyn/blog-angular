export class Publication {
    imgUrl: string;
    title: string;
    textpost: string;
    tags: string;

    constructor(imgUrl = '', title = '', textpost = '', tags = '') {
        this.imgUrl = imgUrl;
        this.title = title;
        this.textpost = textpost
        this.tags = tags
    }
}
