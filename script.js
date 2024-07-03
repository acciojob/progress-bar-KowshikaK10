//your JS code here. If required.

// document.addEventListener("DOMContentLoaded", () => {
//     const circles = document.querySelectorAll(".circle");
// 	const btns = document.querySelectorAll(".btns");
// 	let i=1;
// 	btns.forEach((val) => {
//         val.addEventListener("click", (e) => {
//             if(e.target.id === 'next'){
// 				alert('hi')
// 			}
//         });
//     });
   
// });
document.addEventListener("DOMContentLoaded", () => {
    // const circles = document.querySelectorAll(".circle");
	const next = document.getElementById("next");
	const prev = document.getElementById("prev");
	let i=1;
	let r=0;
	next.addEventListener("click", (e) => {
            if(i<=4){			
				prev.disabled=false;
				r=r+15;
				document.querySelector('.indicator').style.width=`${r}rem`;
				i++;				
				document.getElementById(`circle-${i}`).classList.add('active');
			}
		if(i>4){
					next.disabled=true;
				}
        });

	prev.addEventListener("click", (e) =>{
			if(i>1){
				r=r-15;
				document.querySelector('.indicator').style.width=`${r}rem`;
				document.getElementById(`circle-${i}`).classList.remove('active');
				i--;
			}
		if(i===1){
			prev.disabled=true;
		}
        });
   
});