const oggi = new Date(); // Data corrente
const dataDiNascita = new Date('1998-10-08'); // Esempio di data di nascita
let eta = oggi.getFullYear() - dataDiNascita.getFullYear();
const meseCorrente = oggi.getMonth();
const giornoCorrente = oggi.getDate();
const meseDiNascita = dataDiNascita.getMonth();
const giornoDiNascita = dataDiNascita.getDate();

if (meseCorrente < meseDiNascita || (meseCorrente === meseDiNascita && giornoCorrente < giornoDiNascita)) {
    eta--; // Decrementa l'età se il compleanno non è ancora passato quest'anno
}



export const profile = {
    age: eta,
    name: 'Nicolò',
    surname: 'Parmiggiani',
    city: 'Guastalla (RE)',
    hb: '08/10/1998',
    mail: 'parminico@gmail.com',
    descr1: 'I am a sunny boy, predisposed to socialize with people and relate to them. I practice a lot of sports and this has taught me, since I was little, respect for people, rules and seriousness in doing what I believe in. During my work I developed computer skills, which led me to study web development.',
    descr2: '',
    worker1: 'Web Developer',
    worker2: 'Logistic Manager',
    worker3: 'Footballer',
}

export const skill = [
    {
        title: 'Node.js',
        category: 'Language',
        icon: 'fa-brands fa-node-js',
        color: 'darkgreen',
    },
    {
        title: 'JavaScript',
        category: 'Language',
        icon: 'fa-brands fa-js',
        color: 'yellow',
    },
    {
        title: 'HTML',
        category: 'Language',
        icon: "fa-brands fa-html5",
        color: 'red',
    },
    {
        title: 'Excel VBA',
        category: 'Language',
        icon: 'fa-solid fa-file-excel',
        color: 'darkgreen'
    },
    {
        title: 'React',
        category: 'JavaScript Library',
        icon: 'fa-brands fa-react',
        color: 'lightgreen'
    },
    {
        title: 'Bootstrap',
        category: 'CSS Library',
        icon: "fa-brands fa-bootstrap",
        color: 'purple',
    },
    {
        title: 'CSS',
        category: 'Design Language',
        icon: 'fa-brands fa-css3-alt',
        color: 'blue',
    },
    {
        title: 'VSCode',
        category: 'IDE',
        icon: 'fa-solid fa-code',
        color: 'darkblue'
    },
    {
        title: 'Git',
        category: 'Version control',
        icon: 'fa-brands fa-git-alt',
        color: 'red',
    },
    {
        title: 'Mac Os',
        category: 'Operating System',
        icon: 'fa-solid fa-laptop',
        color: 'lightgray'
    },
    {
        title: 'Windows',
        category: 'Operating System',
        icon: 'fa-brands fa-windows',
        color: 'lightblue'
    },
]
