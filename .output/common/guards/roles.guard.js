"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const user_model_1 = require("../../Models/user.model");
const roles_decorators_1 = require("../decorators/roles.decorators");
let RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(roles_decorators_1.ROLES_KEYS, [context.getHandler(), context.getClass()]);
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const userIdToUpdate = request.params.id;
        const profileKey = request.url.trim().split("/")[2];
        if (!user) {
            throw new common_1.ForbiddenException('You are not authenticated.');
        }
        if (user.role === user_model_1.UserRole.ADMIN) {
            return true;
        }
        if (user.role === user_model_1.UserRole.USER && (user.userId === userIdToUpdate || profileKey === 'me')) {
            return true;
        }
        throw new common_1.ForbiddenException('You do not have the necessary permissions to access this resource.');
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RolesGuard);
//# sourceMappingURL=roles.guard.js.map