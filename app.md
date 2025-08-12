# Podcast Menager

### Descrição

Um app ao estilo netflix, aonde possa centralizar diferentes epsódio podcasts
separados por categorias

### Domínio

Podcasts feitos em vídeo

### Features

- Listar os episódios podcasts em sessões de categorias 
 - [saúde, fitness, mentalidade e humor]
- Filtrar episódios por nome de podcast


## Como aplicar tudo

- Listar os episódios podcasts em sessões de categorias 

### Como vou implementar:



- Vou retornar em uma api rest (json);
- Nome do podcast;
- Nome do episódio;
- Imagem de capa;
- Link;
- Categoria.

GET: retorna lista de episódios

response:
```js
[
{
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30&pp=ygUJZmxvdyBjYnVt",
    categoria: ["saúde", "bodybilder", "esporte"]
},
{
    podcastName: "Ford Performance",
    episode: "Max Verstappen e Chris Harris dirigem o NOVO Ford Mustang GTD! | Ford Performance",
    videoId: "eY8pQMt8eB4",
    cover: "https://i.ytimg.com/vi/eY8pQMt8eB4/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=eY8pQMt8eB4&pp=ugMGCgJlbhABugUEEgJlbsoFDm1heCB2ZXJzdGFwcGVu2AcB",
    categoria: ["documentario", "corrida", "esporte"]
}
]

```
