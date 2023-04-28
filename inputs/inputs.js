var inputs = [
    document.getElementById("inp1") ,
    document.getElementById("inp2") ,
    document.getElementById("inp3") ,
    document.getElementById("inp4")
];

function goTo(inp){
    if( inputs[ inp ].value != "" )
    {
        let flag = false;
        for(let i = (inp + 1) % inputs.length , cnt = 0; cnt < inputs.length - 1; cnt++)
        {
            if( inputs[ i ].value == "" )
                {
                    inputs[ inp ].blur();
                    inputs[ i ].focus();
                    flag = true;
                    break;
                }
            i = (i + 1) % inputs.length;
        }
        if( !flag )
        {
            inputs[ inp ].blur();
            inputs[ inputs.length - 1 ].focus();
        }
    }

}
