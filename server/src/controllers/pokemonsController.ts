import {Request,Response} from 'express';

import pool from '../database'

class PokemonsController {

    public async list (req: Request,res : Response) {
        const pokemons = await pool.query('SELECT * FROM pokemons');
        res.json(pokemons);
    }

// Await toma el tiempo en guardar en la base de datos.
// Promise de Mysql pero no devuelve nada entonces se pone <void>

    public async create(req: Request,res : Response): Promise <void>{
        await pool.query('INSERT INTO pokemons set ?',[req.body]);
        res.json('Pokemon Guardado');
    }

// Promise <Any> aveces retorna el Json, o aveces retorna el Status segun el caso del if!
// keys: cuentan el numero de objetos.

    public async getOne(req: Request,res : Response): Promise <any>{
        const { id } = req.params;        
        const pokemons = await pool.query('SELECT * FROM pokemons WHERE id = ?', [id]);
        var cuentaKeys = Object.keys(pokemons).length;
        if (cuentaKeys > 0){
            return res.json(pokemons[0]);
        }
        res.status(404).json({text: "El Pokemon no existe en la base de datos."});
    }


    public async delete(req: Request,res : Response): Promise <any>{
        const { id } = req.params;        
        await pool.query('DELETE FROM pokemons WHERE id = ?', [id]);
        res.json({text: "El Pokemon ha sido eliminado."});
    
    }

//req.params.id: Funciona para obtener el dato que se envia desde el navegador.
    public async update(req: Request,res : Response){
        const { id } = req.params;        
        await pool.query('UPDATE pokemons set ? WHERE id = ?', [req.body,id]);
        res.json({message:'El pokemon se ha actualizado.'});
    }
}

export const pokemonsController = new PokemonsController();
export default pokemonsController;