console.log('Olá pessoas!');
console.log('#ConstruindoCRUDS');

// [CRUD] JavaScript BÁSICO
const miniTwitter = {
    usuarios: [
        {
            username: 'omariosouto',
        }
    ],
    posts: [
        {
            owner: 'omariosouto',
            content: 'Meu primeiro Tweet'
        }
    ]
}
// CREATE
function criarPost(dados) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}

criarPost({ owner: 'omariosouto', content: 'Segundo tweet' });
console.log(miniTwitter.posts);


// READ
function pegaPosts() {
    return miniTwitter.posts;
}
console.log(pegaPosts());

// UPDATE
function atualizaContentDoPost(id, novoConteudo) {
    const postQueVaiSerAtualizado = pegaPosts().find((post => {
        return post.id === id;
    }))
    console.log(postQueVaiSerAtualizado);
    postQueVaiSerAtualizado.content = novoConteudo;
}
atualizaContentDoPost(1, 'Novo conteúdo do post')
console.log(pegaPosts());

// DELETE
function apagaPost(id) {
    const listaDePostAtualizada = pegaPosts().filter((post => {
        return post.id !== id;
    }))
    miniTwitter.posts = listaDePostAtualizada;
}
apagaPost(1);
console.log(pegaPosts());