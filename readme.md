<h1>Simulador de Corrida Mario Kart (Versão Console)</h1>

  <table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Objetivo:</b>
                <p>Um jogo simples em JavaScript que simula corridas inspiradas no clássico <b>Mario Kart</b>.  
Dois personagens são sorteados aleatoriamente e disputam em uma pista de 5 rodadas, com blocos aleatórios que podem favorecer <b>velocidade</b>, <b>manobrabilidade</b> ou <b>poder</b>.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Manobrabilidade: 3</p>
                <p>Poder: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 5</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Toad</p>
                <img src="./docs/toad.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 5</p>
                <p>Poder: 1</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Regras & mecânicas:</h3>

- **Jogadores:**  
  - Dois personagens são sorteados aleatoriamente da lista (Mario, Luigi, Peach, Yoshi, Bowser, Donkey Kong e Toad).  

- **Corrida:**  
  - A pista tem **5 rodadas**.  
  - Cada rodada sorteia um **bloco da pista**:
    - **Reta:** soma do dado 🎲 + VELOCIDADE → quem tiver maior valor ganha 1 ponto.  
    - **Curva:** soma do dado 🎲 + MANOBRABILIDADE → quem tiver maior valor ganha 1 ponto.  
    - **Confronto:** soma do dado 🎲 + PODER → quem vencer aplica um item no oponente e pode ganhar turbo.  

- **Itens no Confronto:**  
  - **Casco 🐢:** o perdedor perde **-1 ponto** (se tiver pontos).  
  - **Bomba 💣:** o perdedor perde **-2 pontos** (sem valores negativos).  
  - O vencedor ainda pode ganhar **um TURBO ⚡ (+1 ponto)** aleatoriamente.  

- **Condição de vitória:**  
  - Ao final das 5 rodadas, vence quem tiver mais pontos acumulados.  
  - Empates são possíveis.  

---

## 🚀 Como executar

1. Clone este repositório:
   ```
   git clone https://github.com/michaelazev/Simulador-Mario-Kart
   ```
2. Acesse a pasta do projeto:
   ```
   cd mario-kart-simulador
   ```
3. Execute o código com Node.js:
   ```
   node src/index.js
   ```

