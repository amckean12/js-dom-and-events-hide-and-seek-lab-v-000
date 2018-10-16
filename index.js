function getFirstSelector(selector){
  let element = document.querySelector(selector)
  return element
}

function nestedTarget(){
  let element = document.querySelector('#nested .target')
  return element
}

function increaseRankBy(value){
  const elements = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = elements.length; i < l; i++) {
    let children = elements[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + value
    }
  }
}


function deepestChild(){
  let node = document.querySelector('#grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
  }
