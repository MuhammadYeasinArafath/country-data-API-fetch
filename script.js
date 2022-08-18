function loadPosts() {
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(posts => displayPosts(posts))
}
loadPosts();


function displayPosts(posts) {
    let postsContainer = document.getElementById('post');

    for(let post of posts){
        let singlePost = document.createElement('div');
        singlePost.classList.add('post');
        singlePost.innerHTML = `
        <h1> Country Name: ${post.name.common} </h1>
        <h3> Population: ${post.population}</h3>
        <p><img class="png" src= "${post.flags.png}"></p>
        `;
        postsContainer.appendChild(singlePost);

    }
    
}