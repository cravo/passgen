# Strong password generator

This code can generate strong but memorable passwords.  It creates passwords that are three common words and a 4-digit number.  E.g. "PlanetJokerEnrich1002"

Optionally it can swap characters for symbols (e.g. 'a' becomes '@'), and can insert symbols between the words.  Examples are "Jug%Foot&Zephyr^8100" and "C@rd*L@k3!Im@g3^2098"

With the words and numbers alone, there are 1.125 trillion possible passwords it can generate.  With symbol substitution this jumps to 72 trillion.  With symbols between words, it's way more.

If you take for example, "C@rd*L@k3!Im@g3^2098" - then according to the password strength analyser at [IT Tools](https://it-tools.tech/password-strength-analyser), it would take 91,992,085,594,704,890,000 millennia, 9 decades to brute-force.

Feel free to clone this and self-host, or use it directly at https://pass.cravo.cloud
