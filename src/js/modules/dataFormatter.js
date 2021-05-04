function dataGeneralFormatted(data = {}, defaultFiller = '') {
    let { desc, email, firstPhone, secondaryPhone, name, workers } = data;

    let dataFormatted = {
        name,
        email,
        primaryPhone: firstPhone,
        secondaryPhone,
        description: desc
    }

    return dataFormatted;
}

export default dataGeneralFormatted;