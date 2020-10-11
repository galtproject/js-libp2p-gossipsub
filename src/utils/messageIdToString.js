"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageIdToString = void 0;
function messageIdToString(msgId) {
    return (new Uint8Array(msgId)).toString();
}
exports.messageIdToString = messageIdToString;
