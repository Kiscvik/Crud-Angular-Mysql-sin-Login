"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemonsController_1 = __importDefault(require("../controllers/pokemonsController"));
class PokemonRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    //No existe update en router, se cambia por put, put = update.
    config() {
        this.router.get('/', pokemonsController_1.default.list);
        this.router.get('/:id', pokemonsController_1.default.getOne);
        this.router.post('/', pokemonsController_1.default.create);
        this.router.delete('/:id', pokemonsController_1.default.delete);
        this.router.put('/:id', pokemonsController_1.default.update);
    }
}
const pokemonRoutes = new PokemonRoutes();
exports.default = pokemonRoutes.router;
