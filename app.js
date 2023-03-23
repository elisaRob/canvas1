window.onload=function(){
    const canvas=document.querySelector("canvas");
    if(canvas && canvas.getContext){
        ctx=canvas.getContext("2d");
        if(ctx){
            ctx.lineWidth="5";
            ctx.fillStyle="blue";
            ctx.strokeStyle="#555";

            ctx.fillRect(50,50,100,70);
            ctx.strokeRect(200,50,100,70);

            ctx.strokeStyle="green";
            ctx.strokeRect(100,200,100,100);

            ctx.fillStyle="red";
            ctx.fillRect(300,200,100,100)
        }
    }else{
        alert("Votre navigateur ne supporte pas les canvas");
    }
}