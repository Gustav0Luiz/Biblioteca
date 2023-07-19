 const container = document.querySelector('.container');
 const input = document.querySelector(".search-input");
const footer = document.querySelector(".footer")

function newItems(image, title, author, description, rate){
    let div = document.createElement('div');
    div.className = `book-container `;
    let img = document.createElement('img');
    img.src = image;
    let h3 = document.createElement('h3');
    h3.innerHTML = title;
    let h4 = document.createElement('h4');
    h4.innerHTML = `Autor: ${author} `;
    let p = document.createElement('p');
    p.innerHTML = description;
    let div2 = document.createElement('div');
    div2.className = 'rate';
    let fillStars = 0;
    let emptyStars = 0;
    while (fillStars < rate){
        let svg = document.createElement('svg');
        svg.innerHTML = `<svg style="fill: rgb(212, 156, 71);" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>`
        fillStars++
        div2.appendChild(svg)
    }
    while (emptyStars < 5 - rate){
        let svg2 = document.createElement('svg');
        svg2.innerHTML = `<svg style="fill: rgba(212, 156, 71, 0.3);" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>`
        emptyStars++
        div2.appendChild(svg2)
    }
 

    container.appendChild(div);
    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(div2);


}

const setItens = livrosJson.map((item) => {
     newItems(item.img,item.name,item.autor,item.description,item.nota)
})




const search = () => {
    let newBookList = [];
    container.remove();
    let sec = document.createElement('section');
    sec.className = 'container';
    document.body.appendChild(sec);
    document.body.insertBefore(sec,footer);
    livrosJson.map((item) => {
        if(!input.value == '' && item.name.toLowerCase().includes(input.value.toLowerCase())){
            console.log(item.name);
            newBookList.push(item);
            
        }
   })

}



  