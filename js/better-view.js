const apiContainer = document.querySelector('#toc')
const apiTree = apiContainer.querySelector('ul')
const handShank = document.createElement('div')
const arrowRight = document.createTextNode('>>')

let status =  true // true:open; false:close
let apiContainerWidth = 0
let handShankWidth = 32

let apiContainerStyle = `
    position:fixed;
    z-index:10;
    right:-18px;
    top:0;
    height:100%;
    background-color:#89A39A;
    padding-bottom:60px;
`

let apiTreeStyle = `
    height:100%;
    overflow-y:scroll;
`

let handShankStyle = `
    position:absolute;
    top:50%;
    left:0;
    margin-top:-150px;
    width:2rem;
    height:300px;
    line-height:300px;
    text-align:center;
    cursor:pointer;
    background-color:#333;
    -webkit-font-smoothing: antialiased;
    border-radius:0 10px 10px 0
`

handShank.style.cssText = handShankStyle
apiContainer.style.cssText = apiContainerStyle
apiTree.style.cssText = apiTreeStyle

handShank.appendChild(arrowRight)
apiContainer.appendChild(handShank)

// after position:fixed get the real width
apiContainerWidth = apiContainer.clientWidth

handShank.addEventListener('click', function (params) {
    if (status) {
        apiContainer.style.cssText = `${apiContainerStyle};right:-${apiContainerWidth - handShankWidth}px`
        status = false
    } else {
        apiContainer.style.cssText = apiContainerStyle
        status = true
    }
}, true)