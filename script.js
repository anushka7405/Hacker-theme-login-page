const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrixChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[]{}|;:,.<>?/`~";
const fontSize =16;

const columns = canvas.width / fontSize;
const drops = Array.from({length:columns}).fill(1);

const draw = ()=>{
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="#0f0";

    ctx.font = '$(fontSize)px monospace';
    for(let i=0;i<drops.length;i++){
        const text = matrixChars.charAt(Math.floor(Math.random() *matrixChars.length));
        const x  = i * fontSize;
        const y= drops[i] * fontSize;

        ctx.fillText(text,x,y);
        if(y>canvas.height && Math.random()>0.975)
        {
            drops[i]=0;

        }
        drops[i]++;
    }
}
setInterval(draw,50);
window.addEventListener("resize",()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drops.fill(1);
});
