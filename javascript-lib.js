calculateInOut = function(balanse,incoming,outgo){
    var _balanse = parseFloat(balanse),
        _incoming = parseFloat(Math.abs(incoming)),
        _outgo = parseFloat(Math.abs(outgo));
    return ((_balanse+_incoming).toFixed(10)-_outgo).toFixed(10);
}