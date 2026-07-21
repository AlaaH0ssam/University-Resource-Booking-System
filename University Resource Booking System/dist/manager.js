"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=manager.js.map