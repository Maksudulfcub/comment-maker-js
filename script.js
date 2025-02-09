const postButton = document.getElementById('post-button').addEventListener('click',function(){
    const textBox = document.getElementById('text-box');
    const commentDisplay = document.getElementById('comments-display');
    const newComment = textBox.value;
    const p = document.createElement('p');
    p.innerText = newComment;
    commentDisplay.appendChild(p);
    textBox.value = '';
})