import Config from '../config/Config'


const URL_CATEGORIES = `${Config.URL_BACKEND}/categorias`;

function getAll(){
    console.log(Config.URL_BACKEND);
    return fetch(`${URL_CATEGORIES}`)
        .then(async (respostaDoServidor) => {

            if (respostaDoServidor.ok) {
                return await respostaDoServidor.json();
            }
            
            throw new Error ('Não foi possível pegar os dados :('); //importante tratar o erro!

        });
}

function getAllWithVideos(){
    console.log(Config.URL_BACKEND);
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (respostaDoServidor) => {

            if (respostaDoServidor.ok) {
                return await respostaDoServidor.json();
            }
            
            throw new Error ('Não foi possível pegar os dados :('); //importante tratar o erro!

        });
}

export default {
    getAllWithVideos,
    getAll,
};