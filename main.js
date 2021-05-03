const headerTitle = document.getElementById('main-heading')
headerTitle.textContent = "New DOM Layout"

const p1 = document.getElementById('para1')
p1.textContent = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.'


const p2 = document.getElementById('para2')
p2.textContent = 'The Document Object Model (DOM) is a programming interface for HTML and HML documents. It represents the page so that programs can change document structure, style, and content. The DOM represents the document as node and objects. That way, programming languages can connect to the page.'


const bnt = document.getElementById('btn')
bnt.addEventListener('click', () => {
    const p4 = document.getElementById('para4')
    return p4.textContent = 'The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.'
})


const redbg = document.getElementById('red')
redbg.className = 'bg-danger'

const bluebg = document.getElementById('blue')
bluebg.className = 'bg-primary'

const yellowbg = document.getElementById('yellow')
yellowbg.className = 'bg-warning'

const greenbg = document.getElementById('green')
greenbg.className = 'bg-success'

const blackbg = document.getElementById('black')
blackbg.className = 'bg-dark'