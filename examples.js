// example-1
document.querySelector('.example-1-input').value = hebToGib('דג קטן שט שלו בים זך ולפתע פגש חבורה נפלאה');
document.querySelector('.example-1-output').innerText = gibToHeb(document.querySelector('.example-1-input').value);

document.querySelector('.example-1-input').addEventListener('input', (e) => {
    document.querySelector('.example-1-output').innerText = gibToHeb(e.target.value);
});

//example-2

const cardsArr = [
    { name: 'בצלאל סמוטריץ' },
    { name: 'בנימין נתניהו' },
    { name: 'יאיר לפיד' },
    { name: 'איתמר בן גביר' },
    { name: 'ניר ברקת' },
    { name: 'משה גפני' },
    { name: 'מירב מיכאלי' },
    { name: 'מירי רגב' },
    { name: 'אביגדור ליברמן' },
    { name: 'אריה דרעי' },
    { name: 'אמיר אוחנה' },
    { name: 'יריב לוין' },
    { name: 'עומר בר לב' }
];

const cardsContiner = document.querySelector('.example-2-list-contianer');

const addCardsToContainer = (strSearch) => {
    
    cardsContiner.innerHTML = '';
    
    cardsArr.filter((item) => {
        if (strSearch != null && strSearch.trim() != '') {
            return item.name.indexOf(gibToHeb(strSearch)) > -1;
        }
        return true;
    }).forEach((item) => {
        cardsContiner.innerHTML += `<div class="example-2-list-item">${item.name}</div>`;
    });
}

document.querySelector('.example-2-input').addEventListener('input', (e) => {
    addCardsToContainer(e.target.value);
});

addCardsToContainer();