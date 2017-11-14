document.getElementById('button_save').addEventListener('click', function(){
    let textarea = document.getElementById('diary_input').value;
    if(textarea != ""){
        let testCount = 0;
        if(localStorage.getItem('test-count') == null){
            localStorage.setItem('test-count',0);
            testCount = 0;
        }
        else
            testCount = localStorage.getItem('test-count');
        localStorage.setItem('test-'+((testCount*1)+1), textarea);
        localStorage.setItem('test-count' , ((testCount*1)+1));
        console.log("proceed");
        
        let testCountNumber = (testCount*1)+1;
        let content = "";
        for(let a = 1; a<=testCountNumber;a++){
            content += "<li>"+ localStorage.getItem('test-'+a)+"</li>"
            ;
        }
        document.getElementById('diary_list').innerHTML = content;
        document.getElementById('diary_input').value = "";
    }
});
