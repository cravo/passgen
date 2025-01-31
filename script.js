// Symbols substitution map
const symbolMap = 
{
    'a': '@', 'b': '8', 'e': '3', 'i': '!', 'l': '1',
    'o': '0', 's': '$', 't': '7', 'z': '2'
};

function getRandomWord() 
{
    return words[Math.floor(Math.random() * words.length)];
}

function capitalize(word) 
{
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function applySymbolSubstitutions(word) 
{
    return word.split('').map((char, index) => {
        return (index === 0 || !symbolMap[char]) ? char : symbolMap[char];
    }).join('');
}

function getSeparator()
{
    let useSeparator = document.getElementById('separatorToggle').checked;
    let separator = useSeparator ? "!@#$%^&*".charAt(Math.floor(Math.random() * 8)) : ""

    return separator;
}

function generatePassword() 
{
    let useSymbols = document.getElementById('symbolToggle').checked;

    let wordsArray = [
        capitalize(getRandomWord()),
        capitalize(getRandomWord()),
        capitalize(getRandomWord())
    ];

    if (useSymbols) {
        wordsArray = wordsArray.map(word => applySymbolSubstitutions(word));
    }

    let password = wordsArray[0] + getSeparator()
                 + wordsArray[1] + getSeparator()
                 + wordsArray[2] + getSeparator();

    let randomDigits = Math.floor(1000 + Math.random() * 9000).toString();

    password += randomDigits;

    document.getElementById('passwordDisplay').textContent = password;
}

function copyToClipboard() 
{
    const passwordText = document.getElementById("passwordDisplay").textContent;
    navigator.clipboard.writeText(passwordText).then(() => {
        showToast();
    });
}

function showToast() 
{
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

// Event listeners
document.getElementById('generateBtn').addEventListener('click', generatePassword);
document.getElementById('copyBtn').addEventListener('click', copyToClipboard);
document.getElementById('symbolToggle').addEventListener('change', generatePassword);
document.getElementById('separatorToggle').addEventListener('change', generatePassword);

// Generate a password on page load
window.onload = generatePassword;
