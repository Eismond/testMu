import dataGeneralFormatted from './modules/dataFormatter';
import { generateWorkerRow, removeParentNode } from './modules/generateWorkerRow';
import showModalByTime from './modules/showModalByTime';
import fillerMainForm from './modules/fillerMainForm';

$(window).load(() => {
    let startValue;
    let defaultFiller = '-';
    let inputsReset = document.querySelectorAll('input');
    inputsReset.forEach((item) => {
        item.addEventListener('click', (e) => {
            item.value = e.target.value;
        });
    })

    $("button.MuiFab-root:contains('Fill')").click(() => {

        let dataFormatted = dataGeneralFormatted(data);
        let dataForGeneralForm = Object.values(dataFormatted);
        let generalForm = document.querySelector('.MuiBox-root.jss1');
        let generalFormFields = generalForm.querySelectorAll('.MuiFormControl-root');

        generalFormFields.forEach((item) => {
            item.addEventListener('click', (e) => {
                fillerMainForm(generalFormFields, dataForGeneralForm, defaultFiller);
            });
        })

        function getRandomInt(max = 9) {
            return Math.floor(Math.random() * max) * 1000;
        }

        const validationField = (selector, pattern = '') => {
            const fields = document.querySelectorAll(selector);

            fields.forEach(item => {
                item.setAttribute(pattern, regex)
            })
        }



        var workerTableParent = document.querySelector('.jss4 .MuiTableBody-root');

        showModalByTime('#modal', getRandomInt(), true);

        generateWorkerRow(data, workerTableParent);


        fillerMainForm(generalFormFields, dataForGeneralForm, defaultFiller);

        removeParentNode('.jss26', '.MuiTableRow-root')

    })


    let checkForm = document.querySelector('.jss6 button');
    checkForm.addEventListener('click', (e) => {
        //e.stopImmediatePropagation();
    });
})


