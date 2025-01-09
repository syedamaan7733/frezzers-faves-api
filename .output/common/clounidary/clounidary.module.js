"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClounidaryModule = void 0;
const common_1 = require("@nestjs/common");
const clounidary_service_1 = require("./clounidary.service");
let ClounidaryModule = class ClounidaryModule {
};
exports.ClounidaryModule = ClounidaryModule;
exports.ClounidaryModule = ClounidaryModule = __decorate([
    (0, common_1.Module)({
        providers: [clounidary_service_1.ClounidaryService],
        exports: [clounidary_service_1.ClounidaryService],
    })
], ClounidaryModule);
//# sourceMappingURL=clounidary.module.js.map