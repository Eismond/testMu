function fillerMainForm(generalFormFields, dataForGeneralForm, defaultFiller = '') {

    generalFormFields.forEach((item, key) => {
        let fieldInput = item.querySelector('input');
        let parentItem = item.querySelector('MuiFormLabel-root', 'MuiFormLabel-filled');
        let startValue = fieldInput.value;


        item.querySelector('.MuiFormLabel-root').classList.add('MuiInputLabel-shrink', 'MuiFormLabel-filled');
        item.querySelector('.MuiFormLabel-root').dataset.shrink = true;
        item.addEventListener('keypress', (e) => {
            let valueTemporary = fieldInput.value;

            console.log('test temp', valueTemporary);
        })

        item.addEventListener('click', (e) => {
            let valueTemporary = fieldInput.value;
            startValue = valueTemporary;
        })

        if (fieldInput.value != '') {
            return;
        }

        if (dataForGeneralForm[key] == null) {
            item.querySelector('.MuiFormLabel-root').classList.add('MuiInputLabel-shrink', 'MuiFormLabel-filled');
            item.querySelector('.MuiFormLabel-root').dataset.shrink = true;
            fieldInput.value = defaultFiller;
            return;
        }

        if (fieldInput.value == '') {
            if (startValue != undefined) {
                fieldInput.value = startValue;
            }

            fieldInput.value = `${dataForGeneralForm[key]}`;
            item.querySelector('.MuiFormLabel-root').classList.add('MuiInputLabel-shrink', 'MuiFormLabel-filled');
            item.querySelector('.MuiFormLabel-root').dataset.shrink = true;
        }
    })
}

export default fillerMainForm;