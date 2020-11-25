let auth = firebase.auth();
let provider = new firebase.auth.GoogleAuthProvider(); 
auth.onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log(firebaseUser);
    }
})

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code, language) {
      return hljs.highlight(language, code).value;
    },
    langPrefix: 'lang ',
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  });
  

document.querySelectorAll(".tab").forEach((item,index) => {
    item.addEventListener("click", (e)=>{
        document.querySelectorAll(".tab").forEach(item => {
            item.classList.remove("open");
        })
        document.querySelectorAll(".story").forEach(item => {
            item.classList.remove("open");
        })
        e.target.classList.add("open");
        document.querySelector(".story:nth-child("+(index+2)+")").classList.add("open");
    })
})

function update() {
    document.querySelector(".preview-title").innerHTML = document.querySelector(".story-title").value;
    document.querySelector(".preview-date").innerHTML = document.querySelector(".story-date").value;
    document.querySelector(".preview-desc").innerHTML = marked(document.querySelector(".story-desc").value);
    $('.preview-bg').css({
        'background' : 'url('+document.querySelector(".story-bg-src").value+')',
        'background-size': 'cover',
        'filter': 'brightness(0.5)',
        'background-position': 'center'
    });    
    console.log('update',document.querySelector(".preview-bg"))
}