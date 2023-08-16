function f()
{
    document.getElementById('right').style.backgroundColor = "indigo";
}

function g()
{
    document.getElementById('right').style.backgroundColor = "steelblue";
}

function h()
{
    document.getElementById('right').style.backgroundColor = "olive";
}

function i()
{
    let kolor = document.getElementById('list').value;

    document.getElementById('right').style.color = kolor;
}

function change_size()
{
    let czcionka = document.getElementById('czcionka').value;

    document.getElementById('right').style.fontSize = czcionka;
}

function ramka()
{
    if(document.getElementById('box').checked)
    {
        document.getElementById('img').style.border = "1px solid white";
    }
    else{
        document.getElementById('img').style.border = "none";
    }
}

function j(pkt)
{
    document.getElementById('lista2').style.listStyle = pkt;
}