"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PokemonsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pokemons = yield database_1.default.query('SELECT * FROM pokemons');
            res.json(pokemons);
        });
    }
    // Await toma el tiempo en guardar en la base de datos.
    // Promise de Mysql pero no devuelve nada entonces se pone <void>
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO pokemons set ?', [req.body]);
            res.json('Pokemon Guardado');
        });
    }
    // Promise <Any> aveces retorna el Json, o aveces retorna el Status segun el caso del if!
    // keys: cuentan el numero de objetos.
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pokemons = yield database_1.default.query('SELECT * FROM pokemons WHERE id = ?', [id]);
            var cuentaKeys = Object.keys(pokemons).length;
            if (cuentaKeys > 0) {
                return res.json(pokemons[0]);
            }
            res.status(404).json({ text: "El Pokemon no existe en la base de datos." });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM pokemons WHERE id = ?', [id]);
            res.json({ text: "El Pokemon ha sido eliminado." });
        });
    }
    //req.params.id: Funciona para obtener el dato que se envia desde el navegador.
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE pokemons set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'El pokemon se ha actualizado.' });
        });
    }
}
exports.pokemonsController = new PokemonsController();
exports.default = exports.pokemonsController;
