function Passfunc() {


    const firstletters = [
        "hsb/2",
        "nD92n**",
        "?/$2w",
        "dn__B257$67",
        "dD/%$__&",
        "nGs(%&_$"
    ]

    const secondletters = [
        "hsn/",
        "K&BD(/(/",
        "+__#/d",
        "DB&/NS/",
        "NSZ/&/"
    ]

    const thirdletters = [
        "hN_h&/",
        "ÖK8_7(/",
        "(())",
        "**#",
        "DAIUBW",
        "*Ä*DA&"
    ]

    const fourthletters = [
        "hNh&/",
        "ÖK87(/",
        "(())",
        "**#",
        "DAIUBW",
        "__(D__"
    ]

    let randomfirstletters = firstletters[Math.floor(Math.random() * firstletters.length)]
    let randomsecondletters = secondletters[Math.floor(Math.random() * secondletters.length)]
    let randomthirdletters = thirdletters[Math.floor(Math.random() * thirdletters.length)]




    document.getElementById("password").innerHTML = randomfirstletters + randomsecondletters + randomthirdletters;
}

function Passhardfunc() {


    const firstletters = [
        "hsb/2",
        "nD92n**",
        "?/$2w",
        "dn__B257$67",
        "dD/%$__&",
        "nGs(%&_$"
    ]

    const secondletters = [
        "hsn/",
        "K&BD(/(/",
        "+__#/d",
        "DB&/NS/",
        "NSZ/&/"
    ]

    const thirdletters = [
        "hN_h&/",
        "ÖK8_7(/",
        "(())",
        "**#",
        "DAIUBW",
        "*Ä*DA&"
    ]

    const fourthletters = [
        "hNh&/",
        "ÖK87(/",
        "(())",
        "**#",
        "DAIUBW",
        "__(D__"
    ]

    let randomfirstletters = firstletters[Math.floor(Math.random() * firstletters.length)]
    let randomsecondletters = secondletters[Math.floor(Math.random() * secondletters.length)]
    let randomthirdletters = thirdletters[Math.floor(Math.random() * thirdletters.length)]
    let randomfourthletters = fourthletters[Math.floor(Math.random() * fourthletters.length)]




    document.getElementById("password").innerHTML = randomfirstletters + randomfourthletters + randomsecondletters + randomthirdletters + randomfirstletters + randomfourthletters + randomthirdletters;
}