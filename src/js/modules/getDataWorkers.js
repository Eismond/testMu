function getDataForWorkers(data, defaultFiller = '-') {
    let dataWorkers = data.workers.flatMap(item => {

        let { dob, experience, firstName, gender, job, lastName } = item;

        let fullName = `${firstName === null ? '' : firstName} ${lastName === null ? '' : lastName}`;

        if (lastName === null && firstName === null)
            fullName = defaultFiller;

        return {
            fullName,
            birthDay: dob,
            profession: job,
            experience,
            gender
        };
    });

    return dataWorkers;
}

export default getDataForWorkers;