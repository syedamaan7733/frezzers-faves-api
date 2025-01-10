"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHello() {
        return `
    <head>
    <style>
        body {
            background-color: #000;
            color: #74ee15;
            font-family: 'Courier New', monospace;
            height: 100vh;
            margin: 0;
            padding: 20px;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
        }

        h1 {
            font-size: 3rem;
            margin-bottom: 20px;
        }

        .cursor {
            display: inline-block;
            width: 5px;
            height: 15px;
            background-color: #0f0;
            margin-left: 5px;
            animation: blink 1s infinite;
        }

        @keyframes blink {
            0%, 49% {
                opacity: 1;
            }
            50%, 100% {
                opacity: 0;
            }
        }

        .matrix-bg {
            opacity: 0.1;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            background: repeating-linear-gradient(
                0deg,
                rgba(0, 255, 0, 0.15) 0px,
                rgba(0, 255, 0, 0.15) 1px,
                transparent 1px,
                transparent 2px
            );
        }
    </style>
</head>
<body>
    <div class="matrix-bg"></div>
    <div class="container">
        <h1>Welcome to Frezzers Faves API</span></h1>
        <h4>We are ready to serve....<span class="cursor"></span></h4>
    </div>
</body>
    `;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map