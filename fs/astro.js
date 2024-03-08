/// Astro.js
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.altKey && event.key === 'v') {
        var opt = prompt('Input number\n 1. Run JS\n 2: History Flooder\n 3: Eruda Devtools');

        if (opt == "1") {
            void(() => { 
                try {
                    alert(eval(prompt('JS Code:') ?? ( function() {
                        throw null;
                    }())))} 
                catch (e) {
                    e && alert(e);
                }})()
        };

        if (opt == "2") {
            var num=prompt("Number: ");
            done=false;
            x=window.location.href;
            for (var i=1; i<=num; i++){
                history.pushState(0, 0, i==num?x:i.toString());
                if(i==num){done=true}}
            if (done===true) {
                alert('Flooded!');
            };
        };

        if (opt == "3") {
            (function () { 
                var script = document.createElement('script'); 
                script.src="https://cdn.jsdelivr.net/npm/eruda"; 
                document.body.append(script); 
                script.onload = function () { eruda.init(); } }
            )();
        };
    };
});