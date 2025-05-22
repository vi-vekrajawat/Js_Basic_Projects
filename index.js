function Architecture(){
    let main = document.getElementById('BigDiv')
    main.style.border='2px solid brown'
    main.style.boxShadow='0px 10px 30px 0px black'
    // main.style.height='px'
    main.style.width='380px'
    main.style.backgroundColor='brown'
    main.style.marginLeft='350px'
    main.style.marginTop='100px'

    let div1 = document.createElement('div')
    div1.style.border='2px solid red'
    div1.style.height='40px'
    div1.innerHTML='0'
    div1.style.backgroundColor='white'

    let divFirst = document.createElement('div')
    // divFirst.style.border='1px solid blue'
    divFirst.style.height='40px'
    div1.append(divFirst)

    let divSecond = document.createElement('div')
    // divSecond.style.border='1px solid yellow'
    divSecond.style.height='30px'
    
    div1.append(divSecond)
    main.append(div1)


    let div2 = document.createElement('div')
    // div2.style.border='2px solid blue'
    div2.style.height='350px'
    div2.style.display='flex'
    div2.style.display='grid'
    div2.style.gridTemplateColumns='auto auto auto auto'
    // div2.style.alignItems='center'
    // div2.style.justifyContent='center'
    div2.style.gap='5px'
    let i =0;
    let j =0;
    let k =0;
    let temp = 1;
    let temp1 = 2;
    let res = ' '

    for(let n = 0;n<20;n++){
        let small = document.createElement('small')
        let arr1 = ['AC','⌫','%','/']
        let arr2 = ['*','-','+','=',]
        let arr3 = [9,8,7,6,5,4,3,2,1,0,'00','.']
        // small.style.border='1px solid red'
        small.style.display='flex'
        small.style.alignItems='center'
        small.style.justifyContent='center'
        small.style.borderRadius='10px'
        small.style.height='50px'
        small.style.width='70px'
        small.style.marginLeft='10px'
        small.style.marginTop='10px'
        small.style.backgroundColor='white'
        small.style.color='black'
        small.style.boxShadow='3px 20px 40px 3px grey'

        small.addEventListener('mouseover',function(){
            if(small.value==='='){
                small.style.backgroundColor='orange'
                            small.style.color='white'

            }
            else{
            small.style.backgroundColor='blue'
            // small.style.boxShadow='0px 10px 10px 0px grey'
            small.style.transition='all 0.3 ease'
            small.style.transform='scale(1.3)'
            small.style.color='white'
            }
        })
        small.addEventListener('mouseleave',function(){
              if(small.value==='='){
                small.style.backgroundColor='orange'
                small.style.color='white'
            }
            else{
            small.style.backgroundColor='white'
            small.style.transform='scale(1)'
            small.style.color='black'
            }
        })

        if(i<4){
            small.value=arr1[i]
            small.innerHTML=arr1[i++]
        }
        else if(n==(3*temp1)+temp){
            small.value=arr2[j]
            small.innerHTML=arr2[j++]
            temp++
            temp1++
        }
        else{
            small.value=arr3[k]
            small.innerHTML=arr3[k++]
        }
        div2.append(small)

        small.addEventListener('click',function(){
           

            let val = small.value
            if(val==='AC'){
                res=' '
                div1.innerHTML=' '

            }
            else if(val==='='){
                try{
                    let result = eval(res)
                    div1.innerHTML=result
                    res=result.toString()
                }
                catch{
                    div1.innerHTML='Error'
                }
            }
            else if(val==='⌫'){
                res=res.slice(0,-1)
                div1.innerHTML=res
            }
            else{
                res+=val
                div1.innerHTML=res
            }
        })
    }
    main.append(div2)
}