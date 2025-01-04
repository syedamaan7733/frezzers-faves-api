import { UploadApiResponse } from 'cloudinary';
export declare class ClounidaryService {
    uploadImage(file: Express.Multer.File, folder: string): Promise<UploadApiResponse>;
}
