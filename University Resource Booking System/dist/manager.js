"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityMananger = void 0;
class EntityMananger {
    data = [];
    add(item) {
        this.data.push(item);
    }
    Getall() {
        return this.data;
    }
    GetById(idKey, idvalue) {
        return this.data.find(item => item[idKey] === idvalue);
    }
}
exports.EntityMananger = EntityMananger;
//# sourceMappingURL=manager.js.map