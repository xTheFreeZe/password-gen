function Passfunc() {


    const firstletters = [
        "h_Psb/2",
        "nD92n**",
        "?/$2w",
        "dn__B257$67",
        "dD/%$__&",
        "nGs(%&_$"
    ]

    const secondletters = [
        "hsn/",
        "K&_BD(/(/",
        "+__#/d",
        "DB&/NS/",
        "NSZ/&/"
    ]

    const thirdletters = [
        "h*N_h&/",
        "ÖK8_7(/",
        "(())",
        "**#",
        "D(AI_*UBW",
        "*Ä*DA&"
    ]

    let randomfirstletters = firstletters[Math.floor(Math.random() * firstletters.length)]
    let randomsecondletters = secondletters[Math.floor(Math.random() * secondletters.length)]
    let randomthirdletters = thirdletters[Math.floor(Math.random() * thirdletters.length)]




    document.getElementById("password").innerHTML = randomfirstletters + randomsecondletters + randomthirdletters;
}

function Passhardfunc() {


    const firstletters = [
        "h_Psb/2",
        "nD92n**",
        "?/$2w",
        "dn__B257$67",
        "dD/%$__&",
        "nGs(%&_$"
    ]

    const secondletters = [
        "hsn/",
        "K&_BD(/(/",
        "+__#/d",
        "DB&/NS/",
        "NSZ/&/"
    ]

    const thirdletters = [
        "h*N_h&/",
        "ÖK8_7(/",
        "(())",
        "**#",
        "D(AI_*UBW",
        "*Ä*DA&"
    ]

    const fourthletters = [
        "hN_h&/",
        "ÖK87(/",
        "((_)*)",
        "**#",
        "DAIUBW",
        "__(D__"
    ]

    let randomfirstletters = firstletters[Math.floor(Math.random() * firstletters.length)]
    let randomfirstletters2 = firstletters[Math.floor(Math.random() * firstletters.length)]
    let randomsecondletters = secondletters[Math.floor(Math.random() * secondletters.length)]
    let randomthirdletters = thirdletters[Math.floor(Math.random() * thirdletters.length)]
    let randomthirdletters2 = thirdletters[Math.floor(Math.random() * thirdletters.length)]
    let randomfourthletters = fourthletters[Math.floor(Math.random() * fourthletters.length)]




    document.getElementById("password").innerHTML = randomfirstletters + randomfourthletters + randomsecondletters + randomthirdletters + randomfirstletters2 + randomfourthletters + randomthirdletters2;
}