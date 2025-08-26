const player = [
    {

    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
},

    {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
},

    {
    NOME: "Peach",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0,
},
    {
    NOME: "Yoshi",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0,
},
    {
    NOME: "Bowser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
},
    {
    NOME: "Donkey Kong",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
},
    {
    NOME: "Toad",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 5,
    PODER: 1,
    PONTOS: 0,
},
];

// Função para rolar um dado de 6 lados
async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Função para sortear um bloco aleatório
// RETA, CURVA, CONFRONTO
async function getRandomBlock() {
    let random = Math.floor();
    if (random < 0.33) return "RETA";
    if (random < 0.66) return "CURVA";
    return "CONFRONTO";
}

// Função para exibir o resultado do dado + atributo
async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(
        `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`
    );
}

// Item de confronto (CASCO ou BOMBA)
function getRandomItem() {
    return Math.random() < 0.5 ? "CASCO" : "BOMBA";
}

// Item de velocidade (+1 ponto)
function getTurbo() {
    return Math.random() < 0.5 ? 1 : 0; // 50% de chance de ganhar +1 ponto de velocidade
}

// Função principal da corrida (5 rodadas)
async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    // Sorteia o bloco da rodada
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // Cada jogador rola um dado
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // Valores finais do teste
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    // ================= RETA =================
    if (block === "RETA") {
        totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
        totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

    await logRollResult(
        character1.NOME,
        "velocidade",
        diceResult1,
        character1.VELOCIDADE
    );
    await logRollResult(
        character2.NOME,
        "velocidade",
        diceResult2,
        character2.VELOCIDADE
    );
}

    // ================= CURVA =================
    if (block === "CURVA") {
        totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
        totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

    await logRollResult(
        character1.NOME,
        "manobrabilidade",
        diceResult1,
        character1.MANOBRABILIDADE
    );
    await logRollResult(
        character2.NOME,
        "manobrabilidade",
        diceResult2,
        character2.MANOBRABILIDADE
    );
}

    // ================= CONFRONTO =================
    if (block === "CONFRONTO") {
        let powerResult1 = diceResult1 + character1.PODER;
        let powerResult2 = diceResult2 + character2.PODER;

    console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);

    await logRollResult(
        character1.NOME,
        "poder",
        diceResult1,
        character1.PODER
    );
    await logRollResult(
        character2.NOME,
        "poder",
        diceResult2,
        character2.PODER
    );

    // Caso o player1 vença
    if (powerResult1 > powerResult2) {
        let item = getRandomItem(); // Sorteia se é CASCO ou BOMBA
        let dano = item === "CASCO" ? 1 : 2;

    // Player2 perde pontos, mas não pode ficar negativo
    if (character2.PONTOS > 0) {
        character2.PONTOS = Math.max(0, character2.PONTOS - dano);
        console.log(`${character1.NOME} acertou um ${item} 💥 em ${character2.NOME}, que perdeu -${dano} ponto(s)!`
    );
}

    // Chance de turbo para o vencedor
        let turbo = getTurbo();
    if (turbo > 0) {
        character1.PONTOS += turbo;
        console.log(`${character1.NOME} ganhou um TURBO! ⚡ (+${turbo} ponto)`);
    }
}

    // Caso o player2 vença
    if (powerResult2 > powerResult1) {
        let item = getRandomItem();
        let dano = item === "CASCO" ? 1 : 2;

    if (character1.PONTOS > 0) {
        character1.PONTOS = Math.max(0, character1.PONTOS - dano);
        console.log(`${character2.NOME} acertou um ${item} 💥 em ${character1.NOME}, que perdeu ${dano} ponto(s)!`
    );
}

        let turbo = getTurbo();
    if (turbo > 0) {
        character2.PONTOS += turbo;
        console.log(`${character2.NOME} ganhou um TURBO! ⚡ (+${turbo} ponto)`);
    }
}

    // Caso empate
    if (powerResult1 === powerResult2) {
        console.log("Confronto empatado! Nenhum ponto foi perdido");
    }
}

    // ================= MARCAÇÃO DE PONTOS =================
    if (totalTestSkill1 > totalTestSkill2) {
        console.log(`${character1.NOME} marcou um ponto!`);
        character1.PONTOS++;
    } else if (totalTestSkill2 > totalTestSkill1) {
        console.log(`${character2.NOME} marcou um ponto!`);
        character2.PONTOS++;
    }

    console.log("-----------------------------");
    }
}

// ================== RESULTADO FINAL ==================
async function declareWinner(character1, character2) {
    console.log("Resultado final:");
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

    if (character1.PONTOS > character2.PONTOS)
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
    else if (character2.PONTOS > character1.PONTOS)
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
    else console.log("A corrida terminou em empate");
}

// ================== INÍCIO ==================
(async function main() {
    // Sorteia 2 personagens diferentes da lista
    let shuffled = player.sort(() => 0.5 - Math.random());
    let [char1, char2] = shuffled.slice(0, 2);

    console.log(
    `🏁🚦 Corrida entre ${char1.NOME} e ${char2.NOME} começando...\n`);

    await playRaceEngine(char1, char2);
    await declareWinner(char1, char2);
})();