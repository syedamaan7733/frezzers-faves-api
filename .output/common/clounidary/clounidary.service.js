"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClounidaryService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_1 = require("cloudinary");
const dotenv = require("dotenv");
dotenv.config();
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: '294396771689233',
    api_secret: '78x12WbMrHYuUt-eZ1QzMmiAFaM',
});
let ClounidaryService = class ClounidaryService {
    async uploadImage(file, folder) {
        try {
            return new Promise((resolve, reject) => {
                cloudinary_1.v2.uploader
                    .upload_stream({ folder: folder }, (error, result) => {
                    if (error)
                        return reject(error);
                    resolve(result);
                })
                    .end(file.buffer);
            });
        }
        catch (error) {
            const typedError = error;
            console.error(typedError.message);
        }
    }
};
exports.ClounidaryService = ClounidaryService;
exports.ClounidaryService = ClounidaryService = __decorate([
    (0, common_1.Injectable)()
], ClounidaryService);
//# sourceMappingURL=clounidary.service.js.map