"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.ROLES_KEYS = void 0;
const common_1 = require("@nestjs/common");
exports.ROLES_KEYS = 'roles';
const Roles = (...roles) => (0, common_1.SetMetadata)(exports.ROLES_KEYS, roles);
exports.Roles = Roles;
//# sourceMappingURL=roles.decorators.js.map