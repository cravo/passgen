# Strong password generator

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cravo_passgen&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=cravo_passgen)

This code can generate strong but memorable passwords.  It creates passwords that are three common words and a 4-digit number.  E.g. "PlanetJokerEnrich1002"

Optionally it can swap characters for symbols (e.g. 'a' becomes '@'), and can insert symbols between the words.  Examples are "Jug%Foot&Zephyr^8100" and "C@rd*L@k3!Im@g3^2098"

With the words and numbers alone, there are 1.125 trillion possible passwords it can generate.  With symbol substitution this jumps to 72 trillion.  With symbols between words, it's way more.

If you take for example, "C@rd*L@k3!Im@g3^2098" - then according to the password strength analyser at [IT Tools](https://it-tools.tech/password-strength-analyser), it would take 91,992,085,594,704,890,000 millennia, 9 decades to brute-force.  Even a standard 3-words and a number such as "UltraBoreStable9184" would take 360,276,133,751,390 millennia, 5 decades to brute-force.  As this uses words, dictionary attacks may take less time but you get the idea.

Given this is open source and the list of words is public, if someone knows you've used this particular password generator then they could have pre-generated the list of all possible combinations this generator can produce and attack you that way, but I'd say the chances of that are slim.

Feel free to clone this and self-host, or use it directly at https://pass.cravo.cloud
