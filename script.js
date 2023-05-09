var idCounter = 1


const ins = () => {
    let type = document.querySelector("#type").value;
    let label = document.querySelector("#label").value;
    let placeholder = document.querySelector("#placeholder").value;
    switch (type){
        case 'text': appendText(label, placeholder, idCounter)
                        idCounter += 1
                        break;
        case 'radio': appendRadio(label, placeholder, idCounter)
                        idCounter += 1
                        break;
        case 'button': appendButton(label, placeholder, idCounter)
                        idCounter += 1
                        break;
    }
}
const appendText = (label = "No label", placeholder = "No placeholder", idCounter) => {
    var currentID = idCounter
    var nslabel = label.replace(/\s/g, "")

    let fl = document.createElement('div')
    fl.setAttribute('id', currentID)
    fl.setAttribute('class', 'form-group mt-3')
    fl.setAttribute('name', 'text')

    let al = document.createElement('label')
    al.setAttribute('for', nslabel)
    al.setAttribute('class','h2 ms-2')
    al.setAttribute('name', nslabel)
    al.textContent = label

    let el = document.createElement('input');
    el.textContent = label
    el.setAttribute('class', 'width-100 mt-1 form-control')
    el.setAttribute('placeholder', placeholder)
    el.setAttribute('name', nslabel)
    
    let p = document.createElement('p')
    p.textContent = currentID
    p.setAttribute('class', 'h6')
 

    document.querySelector("#form").append(fl)
    document.getElementById(currentID).append(p)
    document.getElementById(currentID).append(al)
    document.getElementById(currentID).append(el)
  
}
const appendRadio = (label = "No label", placeholder = "No placeholder", idCounter) => {
    var currentID = idCounter
    var nslabel = label.replace(/\s/g, "")

    let fl = document.createElement('div')
    fl.setAttribute('id', currentID)
    fl.setAttribute('class', 'form-group mt-3')
    fl.setAttribute('name', 'radio')

    let el = document.createElement('input');
    el.textContent = label
    el.setAttribute('class', 'mt-1')
    el.setAttribute('type', 'radio')
    el.setAttribute('name', nslabel)

    let al = document.createElement('label')
    al.setAttribute('for', nslabel)
    al.setAttribute('class','h5 ms-3')
    el.setAttribute('name', nslabel)
    al.textContent = label

    let p = document.createElement('p')
    p.textContent = currentID
    p.setAttribute('class', 'h6')

    let br = document.createElement('br')

    

    document.querySelector("#form").append(fl)
    document.getElementById(currentID).append(p)
    document.getElementById(currentID).append(el)
    document.getElementById(currentID).append(al)
    document.getElementById(currentID).append(br)

}
const appendButton = (label = "No label", placeholder = "No placeholder", idCounter) => {
    var currentID = idCounter
    var nslabel = label.replace(/\s/g, "")

    let fl = document.createElement('div')
    fl.setAttribute('id', currentID)
    fl.setAttribute('class', 'form-group mt-3')
    fl.setAttribute('name', 'button')

    let al = document.createElement('label')
    al.setAttribute('for', nslabel)
    al.setAttribute('class','ms-2')
    al.setAttribute('name', nslabel)
    al.textContent = label

    let el = document.createElement('button');
    el.textContent = placeholder
    el.setAttribute('class', 'btn btn-success ms-1 mt-1')
    el.setAttribute('name', nslabel)

    let p = document.createElement('p')
    p.textContent = currentID
    p.setAttribute('class', 'h6')
    
    
    document.querySelector("#form").append(fl)
    document.getElementById(currentID).append(p)
    document.getElementById(currentID).append(al)
    document.getElementById(currentID).append(el)


}

const del = () => {
    let idHolder = document.getElementById("delID").value
    const deleteElement = document.getElementById(idHolder);
    deleteElement.remove()
    
}

