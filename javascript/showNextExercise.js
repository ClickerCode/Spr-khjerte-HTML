var exerciseDiv = document.getElementById('exercise');

function showNextExercise() {
    exerciseDiv.innerHTML = `

        <p>Er katten er under sofaen?</p>
        <div class="box"></div>
        <div class="picture">
            <a target="_blank" href="bilder/oppaa.jpg">
                <img src="bilder/oppaa.jpg" alt="Oppå" width="500" height="300" />
            </a>
        </div>
        <button class="button" onclick="showWrong()">Riktig</button>
        <button class="button2" onclick="showCorrect()">Galt</button>
        <button onclick="showNextExercise2()">Neste oppgave</button>
        `;
}

function showCorrect() {    
    exerciseDiv.innerHTML +=
        '<div class="alertRight">Congratulation! You answered right!</div>';
    countScoreCorrect();
}

function showWrong() {    
    exerciseDiv.innerHTML +=
        '<div class="alertWrong">Sorry. You answered wrong.</div>';
    countScoreWrong();
}

function showNextExercise2() {
    exerciseDiv.innerHTML = `

    <div class="box">Er katten over sofaen?</div>
    <div class="picture">
    <a target="_blank" href="bilder/over.jpg">
        <img src="bilder/over.jpg" alt="Over" width="500" height="300" />
    </a>
    </div>
    <button class="button" onclick="showCorrect()">Riktig</button>
    <button class="button2" onclick="showWrong()">Galt</button>
        <button onclick="showNextExercise3()">Neste oppgave</button>
        `;
}

function showNextExercise3() {
    exerciseDiv.innerHTML = `

        <p>Sitter katten på høyre side av sofaen?</p>
        <div class="box"></div>
        <div class="picture">
           <a target="_blank" href="bilder/hyre.png">
            <img src="bilder/hyre.png" alt="Høyre" width="500" height="300" />
        </a>
        </div>
        <button class="button" onclick="showCorrect()">Riktig</button>
        <button class="button2" onclick="showWrong()">Galt</button>
        <button onclick="showNextExercise4()">Neste oppgave</button>
        `;
}

function showNextExercise4() {
    exerciseDiv.innerHTML = `

        <p>Er katten under sofaen?</p>
        <div class="box"></div>
        <div class="picture">
            <a target="_blank" href="bilder/paa.png">
                <img src="bilder/paa.png" alt="På" width="500" height="300" />
            </a>
        </div>
        <button class="button" onclick="showWrong()">Riktig</button>
        <button class="button2" onclick="showCorrect()">Galt</button>
        <button onclick="showNextExercise5()">Neste oppgave</button>
        `;
}

function showNextExercise5() {
    exerciseDiv.innerHTML = `

        <p>Er katten på venstre side av sofaen?</p>
        <div class="box"></div>
        <div class="picture">
            <a target="_blank" href="bilder/over.jpg">
                <img src="bilder/over.jpg" alt="Over" width="500" height="300" />
            </a>
        </div>
        <button class="button" onclick="showWrong()">Riktig</button>
        <button class="button2" onclick="showCorrect()">Galt</button>
        <button onclick="showNextExercise6()">Neste oppgave</button>
        `;

}

function showNextExercise6() {
    exerciseDiv.innerHTML = `

        <p>Sitter katten på venstre siden av sofaen?</p>
        <div class="box"></div>
        <div class="picture">
            <a target="_blank" href="bilder/paavenstre.jpg">
                <img src="bilder/paavenstre.jpg" alt="Venstre" width="500" height="300" />
            </a>
        </div>
        <button class="button" onclick="showCorrect()">Riktig</button>
        <button class="button2" onclick="showWrong()">Galt</button>
        <button onclick="showNextExercise7()">Neste oppgave</button>
        `;
}

function showNextExercise7() {
    exerciseDiv.innerHTML = `

        <p>Er katten på høyre side av sofaen?</p>
        <div class="box"></div>
        <div class="picture">
            <a target="_blank" href="bilder/under.jpg">
                <img src="bilder/under.jpg" alt="Under" width="500" height="300" />
            </a>
        </div>
        <button class="button" onclick="showWrong()">Riktig</button>
        <button class="button2" onclick="showCorrect()">Galt</button>
        <button onclick="showNextExercise8()">Neste oppgave</button>
        `;
}

function showNextExercise8() {
    exerciseDiv.innerHTML = `

        <p>Sitter katten på venstre side av sofaen?</p>
        <div class="box"></div>
        <div class="picture">
            <a target="_blank" href="bilder/venstre.png">
                <img src="bilder/venstre.png" alt="Venstre" width="500" height="300" />
            </a>
        </div>
        <button class="button" onclick="showCorrect()">Riktig</button>
        <button class="button2" onclick="showWrong()">Galt</button>
        <button onclick="showNextExercise8()">Neste oppgave</button>
        `;
}
