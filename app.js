function Passfunc() {


    const firstletters = [
        "hsb/2",
        "nD92n**",
        "?/$2w",
        "dnB257$67",
        "dD/%$§hszh&",
        "nGs(%&$"
    ]

    const secondletters = [
        "hsn/",
        "K&BD(/(/",
        "+#/d",
        "DB&/NS/",
        "NSZ/&/"
    ]

    const thirdletters = [
        "hNh&/",
        "ÖK87(/",
        "()",
        "**#",
        "HANS",
        "*Ä*DA&"
    ]

    let randomfirstletters = firstletters[Math.floor(Math.random() * firstletters.length)]
    let randomsecondletters = secondletters[Math.floor(Math.random() * secondletters.length)]
    let randomthirdletters = thirdletters[Math.floor(Math.random() * thirdletters.length)]




    document.getElementById("password").innerHTML = randomfirstletters + randomsecondletters + randomthirdletters;
}