let list_art = document.getElementById("art-list");

let articles = [
    {
        auteur: "le vien est dure merd",
        contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nobis? Cumque asperiores quos, iure nam enim optio minima debitis ex ea aperiam eos minus dolore quibusdam, distinctio, cupiditate doloribus rerum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit mollitia perferendis dolores suscipit? Temporibus saepe quasi excepturi tempore perspiciatis! Et dicta sequi magni autem eaque iure hic repellat, tempore beatae.",
        psedo: "chat206"
    },
    {
        auteur: "les chat dans la vie c'est ?",
        contenu: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nobis? Cumque asperiores quos, iure nam enim optio minima debitis ex ea aperiam eos minus dolore quibusdam, distinctio, cupiditate doloribus rerum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit mollitia perferendis dolores suscipit? Temporibus saepe quasi excepturi tempore perspiciatis! Et dicta sequi magni autem eaque iure hic repellat, tempore beatae.",
        psedo: "chat206"
    }
];

for (let i = 0; i < articles.length; i++) {
    list_art.innerHTML +=
        `<article>
            <h2>${articles[i].auteur}</h2>
            <p>${articles[i].contenu}</p>
            <a href="/"><img src="user-solid.svg" alt="/">${articles[i].psedo}</a>
        </article>`
}