// let userActivityTime = new Date();
// const posts = [{title: 'POST1'}, {title: 'POST2'}, {title: 'POST3'}];

// function updateLastUserActivity(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             userActivityTime = new Date();
//             resolve(userActivityTime);
//         }, 1000);
//     })
// }

// function printPost() {
//     return new Promise((resolve, reject) => {
//         posts.forEach((post) => {
//             console.log(post.title)
//         })
//         resolve();
//     })
// }

// function createPost() {
//     return new Promise( (resolve, reject) => {
//         console.log(`User last activity time before creating post 4 ${userActivityTime}`);
//         posts.push({title: 'POST4'});
//         resolve();
//     }) 
// }

// function deletePost(){
//     return new Promise((resolve, reject) => {
//         posts.pop();
//         resolve();
//     })
// }


// Promise.all([createPost(), updateLastUserActivity()]).then(([createdPostData, updatedTime]) => {
//     printPost();
//     console.log(updatedTime);
//     deletePost().then(() =>{
//         printPost();
//     })
// })


let prePost = async () => {
    let userActivityTime = new Date();
    const posts = [{title: 'POST1'}, {title: 'POST2'}, {title: 'POST3'}];

    const post = new Promise( (resolve, reject) => {
        console.log(`User last activity time before creating post 4 ${userActivityTime}`);
        posts.push({title: 'POST4'});
        resolve();
    });
    
    const updatedTime = new Promise((resolve, reject) => {
        setTimeout(() =>{
            userActivityTime = new Date();
            resolve(userActivityTime);
        }, 1000);
    });
    
    let printPost = () => {
        posts.forEach((post) => {
            console.log(post.title)
        })
    }


    const [allPosts, lastActiveTime] = await Promise.all([post, updatedTime]);

    printPost();
    console.log(lastActiveTime);

    let deletePost = new Promise((resolve, reject) => {
        posts.pop();
        resolve();
    });

    let deleted = await deletePost;

    printPost();
}

prePost();