import {Router} from 'express';
import pokemonsController from '../controllers/pokemonsController';

class PokemonRoutes {

    public router : Router = Router();

    constructor(){
        this.config();

    }

//No existe update en router, se cambia por put, put = update.

    config():void{
        this.router.get('/', pokemonsController.list);
        this.router.get('/:id', pokemonsController.getOne);
        this.router.post('/', pokemonsController.create);
        this.router.delete('/:id', pokemonsController.delete);
        this.router.put('/:id', pokemonsController.update);
    
    }

}

const pokemonRoutes = new PokemonRoutes();
export default pokemonRoutes.router;