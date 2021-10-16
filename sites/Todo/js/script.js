let detail = document.querySelector('#detail')
let send = document.querySelector('#send')
let div = document.querySelector('#content')
let i=1

send.addEventListener('click', ()=>{
    let task = document.createElement('div')
    let txt = document.createElement('div')
    let option = document.createElement('div')
    let p = document.createElement('p')
    let suppr = document.createElement('button')
    let modif = document.createElement('button')
    let add = document.createElement('button')
    let minus = document.createElement('button')
    let p2 = document.createElement('h5')
    task.className = "task"
    option.className = "option"
    txt.className = "txt"
    div.append(task)
    task.style.opacity = "100%"
    task.append(txt)
    txt.append(p)
    txt.append(p2)
    p.innerHTML = detail.value
    task.append(option)
    option.append(suppr)
    option.append(modif)
    option.append(add)
    option.append(minus)
    add.innerHTML = "+"
    minus.innerHTML = "-"
    add.addEventListener('click', ()=>{
        if(p2.innerHTML == ""){
            i=2
            p2.innerHTML = "x"+i
        } else {
            i++
            p2.innerHTML = "x"+i
        }
    })
    minus.addEventListener('click', ()=>{
        if(i>1){
            i--
            console.log(i)
            p2.innerHTML = "x"+i
        }
    })
    suppr.innerHTML = "Supprimer"
    suppr.addEventListener('click', ()=>{
        task.remove()
    })
    detail.value = ""
    modif.innerHTML = "Modifier"
    modif.addEventListener('click', ()=>{
        let txtmodif = document.createElement('input')
        let corriger = document.createElement('button')
        modif.style.display = "none"
        option.append(txtmodif)
        txtmodif.value = p.innerHTML
        corriger.innerHTML = "Corriger"
        option.append(corriger)
        corriger.addEventListener('click', ()=>{
            if(txtmodif.value == ""){
                txtmodif.style.border = "red 1px solid"
                txtmodif.placeholder = "Veuillez remplir stp"
            } else {
                p.innerHTML = txtmodif.value
                txtmodif.remove()
                corriger.remove()
                modif.style.display = "block"
            }
        })
    })
})
