const texts = document.querySelector('.texts');


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();

recognition.interimResults = true;

let p = document.createElement('p');
    
recognition.addEventListener('result',(e) => {
    const text = Array.from(e.results).map(result => result[0])
    .map(result => result.transcript)
    .join('');

    p.innerHTML = text;
    texts.appendChild(p);

// Added Cases
    if(e.results[0].isFinal){
        if(text.includes('hi coffee')){
            p = document.createElement('p'); 
            p.classList.add('reply');
            p.innerText = 'Hi Master!'
            texts.appendChild(p); 
        }
        if(text.includes('how are you')){
            p = document.createElement('p'); 
            p.classList.add('reply');
            p.innerText = 'I am good what about you!'
            texts.appendChild(p); 
        }

        if(text.includes(`what's your name`) || text.includes(`what is your name`)){
            p = document.createElement('p'); 
            p.classList.add('reply');
            p.innerText = 'I am Coffee! '
            texts.appendChild(p); 
        }

        p = document.createElement('p');  

    }

    console.log(text)
})

recognition.addEventListener('end', ()=>{
    recognition.start();
})

recognition.start();