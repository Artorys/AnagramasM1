function getAnagramsOf(input)
{
    const resultado = document.querySelector("#resultado")
    resultado.innerText = ""
    let array = []
    const palavra = alphabetize(input)
    for(let i = 0;i < palavras.length; i++)
    {
        let elementoAlfabetizado = alphabetize(palavras[i])
        if(palavra.length == elementoAlfabetizado.length)
        {
            if(elementoAlfabetizado.match(palavra))
            {
                array.push(palavras[i])
            }
        }
    }
    resultado.innerText = array
}
document.querySelector("button").addEventListener("click",(e)=>
{
    e.preventDefault()
    const input = document.querySelector("input").value
    getAnagramsOf(input)
})
function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}