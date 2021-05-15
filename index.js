function main () {
    const panelsElements = document.querySelector('.wrapper');
    panelsElements.onclick=function(){
        panelsElements.children[0].onclick=function(){
            r=document.querySelector('.red-counter').textContent;
            r1=parseInt(r,10);
            document.querySelector('.red-counter').textContent=r1+1;
        }
        panelsElements.children[1].onclick=function(){
            g=document.querySelector('.green-counter').textContent;
            g1=parseInt(g,10);
            document.querySelector('.green-counter').textContent=g1+1;
        }
        panelsElements.children[2].onclick=function(){
            b=document.querySelector('.blue-counter').textContent;
            b1=parseInt(b,10);
            document.querySelector('.blue-counter').textContent=b1+1;
        }
    }
}
window.onload = main;