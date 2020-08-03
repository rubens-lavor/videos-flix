import Config from '../config/Config'


const URL_VIDEOS = `${Config.URL_BACKEND}/videos`;

function create(objetoDoVideo) {
    return fetch(`${URL_VIDEOS}?_embed=videos`,{
        method: 'POST',
        headers: {
            'Content-type':'application/json',
        },
        body: JSON.stringify(objetoDoVideo),
    })
        .then(async (respostaDoServidor) => {

            if (respostaDoServidor.ok) {
                return await respostaDoServidor.json();
            }

            throw new Error('Não foi possível cadastrar os dados :('); //importante tratar o erro!

        });
}

export default {
    create,
};