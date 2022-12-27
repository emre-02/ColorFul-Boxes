//DOM(Document Object Model)

//creating element


/*
const mainEl=document.querySelector('main')
const myPEl=document.createElement('p')
 myPEl.textContent='Hello World'
 myPEl.style.backgroundColor='pink'
 myPEl.style.padding='48px'
 myPEl.classList.add('test')

 mainEl.append(myPEl);
 */




const randomColors=['red','orange','aqua','beiqe','blue','green','fuschia','orangered','pink',
'limegreen','bisque']





const btnEl=document.querySelector('button');
const mainEl=document.querySelector('main');
let counter=0;





btnEl.addEventListener('click',createBox)


function createBox(e){
    const boxEl=document.createElement('div')
    boxEl.textContent=counter;
    boxEl.classList.add('box')
    boxEl.style.backgroundColor=getRandomColor()
    mainEl.append(boxEl)


    counter=counter+1;
    //counter++


}




function getRandomColor(e){
    const randomRange=Math.random()* randomColors.length;
    const randomİndex=Math.floor(randomRange)
    console.log(randomİndex)

    return randomColors[randomİndex]
  

}





























                    






