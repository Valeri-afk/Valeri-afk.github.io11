let quotes = ["Wise men speak because they have something to say; fools because they have to say something. — Мудрые люди говорят потому, что им есть, что сказать, глупцы — потому что они должны сказать что-то. Платон",
"Chop your own wood and it will warm you twice. — Коли свои дрова сам, и ты согреешься дважды. Генри Форд",
"I don’t care what you think about me. I don’t think about you at all. — Я не забочусь о том, что вы обо мне думаете, я о вас не думаю вообще. Коко Шанель",
"Work hard to get what you like, otherwise you'll be forced to just like what you get. — Работайте усердно, чтобы получить то, что любите, иначе придется полюбить то, что получили. Бернард Шоу",
"In the End, we will remember not the words of our enemies, but the silence of our friends. — В конце концов, мы будем помнить не слова врагов, а молчание друзей. Мартин Лютер Кинг",
"When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps. — Если вы делаете что-то прекрасное и возвышенное, а этого никто не замечает — не расстраивайтесь: солнце каждое утро устраивает прекрасное зрелище, но большая часть зрителей в это время еще спит. Джон Леннон",
"The weak can never forgive. Forgiveness is the attribute of the strong. Слабые никогда не прощают. Умение прощать — свойство сильных. Махатма Ганди",
"Success is the ability to go from failure to failure without losing your enthusiasm. Успех — это умение двигаться от неудачи к неудаче, не теряя энтузиазма. Уинстон Черчилль",
"There is no such thing as an accident. What we call by that name is the effect of some cause which we do not see. Случайностей не существует. То, что мы ими называем — следствие некой причины, недоступной нашему взору. Вольтер",
"The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks. — Самый большой риск — не брать на себя никакого риска. В мире, который очень быстро меняется, только одна стратегия гарантирует провал: отсутствие риска. Марк Цукерберг",
"Life is far too important a thing ever to talk seriously about. Жизнь — слишком серьезная штука, чтобы говорить о ней всерьез. О. Уайльд",
"Our life is what our thoughts make it. Наша жизнь есть то, что мы думаем о ней. М. Аврелий",
"Keep smiling, because life is a beautiful thing and there's so much to smile about. Улыбнитесь, ведь жизнь — прекрасная вещь, и есть много причин для улыбки. М. Монро",
"Life is a series of choices. Жизнь — это череда выборов. Нострадамус",
"The purpose of life is to live correctly, think correctly, and act correctly. Цель жизни заключается в том, чтобы правильно жить, правильно мыслить и правильно действовать. М. Ганди",
"As long as man continues to be the ruthless destroyer of lower living beings he will never know health or peace. For as long as men massacre animals, they will kill each other. Пока человек будет безжалостно уничтожать низших существ, он никогда не будет знать здоровья и мира. До тех пор, пока люди будут убивать животных, они будут убивать друг друга. Пифагор",
"The first thing you learn in life is you're a fool. The last thing you learn in life is you're the same fool. Первое, что узнаешь в жизни — это что ты дурак. Последнее, что узнаешь, — это что ты все тот же дурак. Р. Брэдбери"]

let colors = ['(45deg, red, blue)','(45deg, #EECFBA, #C5DDE8)','(45deg, blue, green)',
'(45deg, red, blue)','(to top left, powderblue, pink)','(to right, #F6EFD2, #CEAD78)',
'(white, #FFA9A1)','(at top, #FEFFFF, #A7CECC)']



let quoteBtn = document.querySelector('input');
quoteBtn.addEventListener('click', getRandomQuote);
function getRandomQuote() {
    generateRandomQuote()
    createBackgroundColor()
}

function createBackgroundColor() {
    let quotesBlock = document.querySelector('.quotes-block');
    let randomColor = parseInt(Math.random() * 8);
    quotesBlock.style.background = 'linear-gradient' + colors.find((elem,i) => i === randomColor)
}

function generateRandomQuote()  {
    let quote = document.querySelector('.quote')
    let randomQuote = parseInt(Math.random() * 16)
    quote.innerHTML = quotes.find((elem,i) => i === randomQuote)
}
generateRandomQuote()



