
var T=document.querySelectorAll('.tab');
T.forEach(function(b){b.addEventListener('click',function(){T.forEach(function(x){x.setAttribute('aria-pressed',x===b);document.getElementById('p'+x.dataset.i).hidden=x!==b})})});
