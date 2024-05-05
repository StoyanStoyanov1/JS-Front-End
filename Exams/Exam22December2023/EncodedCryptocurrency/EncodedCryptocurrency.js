function encodedCryptocurrency(arrayInput) {
    let text = arrayInput.shift();
    const result = []

    for (const input of arrayInput) {
        if (input === 'TakeEven') {
            text = text.split('').filter((_, index) => index % 2 === 0).join('');
            result.push(text);
        }

        else if (input.includes('ChangeAll')) {
            const [_, search, replaceSymbol] = input.split('?');
            while (text.includes(search)) {
                text = text.replace(search, replaceSymbol)
            }
            result.push(text)
        }

        else if (input.includes('Reverse')) {
            const [_, substring] = input.split('?');
            const startIndex = text.indexOf(substring);
            const endIndex = startIndex + substring.length;
            const reversedText = text.substring(startIndex, endIndex).split('').reverse().join('')

            if (startIndex < 0) {
                result.push('error');
                continue
            }

            text = text.substring(0, startIndex) + text.substring(endIndex) + reversedText
            result.push(text)
        } else if (input === 'Buy') {
            result.push(`The cryptocurrency is: ${text}`);

        }
    }

    return result.join('\n');
}

console.log(encodedCryptocurrency(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"]))

console.log(encodedCryptocurrency((["PZDfA2PkAsakhnefZ7aZ",
    "TakeEven",
    "TakeEven",
    "TakeEven",
    "ChangeAll?Z?X",
    "ChangeAll?A?R",
    "Reverse?PRX",
    "Buy"])))