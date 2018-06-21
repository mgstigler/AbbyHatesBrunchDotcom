export interface BlogModel {
    BlogID: number;
    BlogTitle: string;
    BlogContent: string;
    EggRating: number;
    PictureId: string;
}

// ex request 
// {
//     "BlogID": 1,
//     "BlogTitle": "string",
//     "BlogContent": "string",
//     "EggRating": 1,
//     "PictureId": "string"
// }