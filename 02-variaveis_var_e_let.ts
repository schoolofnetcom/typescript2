function showWithVar(){
    var text = 'luiz carlos';
    var text = "texto";
    if(true){
        var text = 'texto';
    }
    console.log(text);
}

function showWithLet(){
    let text = 'luiz carlos';
    text = "texto";
    if(true){
        let text = 'texto';
    }
    console.log(text);
}

showWithLet();