let peeButton = document.getElementById("pee-button")
let peeOutput = document.getElementById("pee-output")
let button = document.getElementById("submit-button")

function getRandomListItem(list) {
    let randomItem = list[Math.floor(Math.random() * list.length)]
    console.log(randomItem)
    return (randomItem)
}
function randomlyGenerateText() {
    // let textList = [
    //     "cat",
    //     "dog",
    //     "jimmy boy"
    // ]
    // let randomText = textList[Math.floor(Math.random() * textList.length)]
    // console.log(randomText)
    // peeOutput.textContent = randomText


    let textTypes = ["advice", "date advice", "quote",]
    let textType = getRandomListItem(textTypes)

    switch (textType) {

        case "advice":
            text = getRandomListItem([

                "don't hang out with bears, they might eat you man",
                "don't be mean to ai, it might bite you",
                "oranges are good, you should eat them"

            ])

            peeOutput.textContent = text
            return

        case "date advice":
            text = getRandomListItem([

                "don't date a serial killer",
                "don't date chairs",
                "don't date people who prefer 0.9 lead"

            ])

            peeOutput.textContent = text
            return

        case "quote":

            text = getRandomListItem([

                "'PIGEONS ARE LIARS!!!!' -my brother",
                "'wherever you go, there you are.' -my mom",
                "'i don't know' -mataya",
                "'uhhh idk' -my sister"

            ])

            peeOutput.textContent = text
            return
    }
}



function feedbackSubmission() {
    console.log("form submitted")
}