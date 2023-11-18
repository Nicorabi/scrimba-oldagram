const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },

    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },

    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const heartsEl = document.querySelector("#like");
const likesEl = document.querySelector("#likes");

let likesCount = 21492;

heartsEl.addEventListener("click", function() {
    likesCount++;
    likesEl.textContent = likesCount.toLocaleString();
});


const postsWithoutFirst = posts.slice(1);

postsWithoutFirst.forEach(post => {
    const postContainer = document.createElement("div");
    postContainer.classList.add("post-container");

    const postElement = document.createElement("div");
    postElement.classList.add("post");

    postElement.innerHTML = `
        <div class="top-section">
            <div class="top-container">
                <img src="${post.avatar}" class="img-icons">
                <div class="section-container">
                    <h3>${post.name}</h3>
                    <p>${post.location}</p>
                </div>
            </div>
            <img src="${post.post}" class="post-image">
        </div>
        <div class="bottom-section">
            <div class="bottom-container">
                <img src="images/icon-heart.png" class="img-icons-two">
                <img src="images/icon-comment.png" class="img-icons-two">
                <img src="images/icon-dm.png" class="img-icons-two">
            </div>
            <p class="likes">${post.likes} likes</p>
            <p class="comment"><span class="text">${post.username}</span> ${post.comment}</p>
        </div>
    `;

    postContainer.appendChild(postElement);
    document.body.appendChild(postContainer);

    const likeButton = postElement.querySelector(".img-icons-two");
    const likesElement = postElement.querySelector(".likes");

    likeButton.addEventListener("click", function() {
        post.likes++;
        likesElement.textContent = `${post.likes} likes`;
    });
});