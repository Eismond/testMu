import getDataForWorkers from './getDataWorkers';

function generateWorkerRow(data, parentSelector, defaultFiller = '-') {

    let dataWorkers = getDataForWorkers(data);
    let rowGenerated;


    dataWorkers.forEach((item) => {
        let { fullName, birthDay, profession, experience, gender } = item;
        rowGenerated = `<tr class="MuiTableRow-root">
                <th class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall" role="cell" scope="row">${fullName}</th>
                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall">${birthDay != null ? birthDay : defaultFiller}</td>
                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall">${profession != null ? profession : defaultFiller}</td>
                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall">${experience != null ? experience : defaultFiller}</td>
                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall">${gender != null ? gender : defaultFiller}</td>
                <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeSmall">
                    <div class="MuiBox-root jss26">
                        <svg class="MuiSvgIcon-root jss2" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                            ></path>
                        </svg>
                    </div>
                </td>
            </tr>`;

        parentSelector.insertAdjacentHTML('beforeEnd', rowGenerated);
    })

}

function removeParentNode(actionElem, parentEl) {
    let removeBtns = document.querySelectorAll(actionElem);

    removeBtns.forEach(item => {
        item.addEventListener('click', () => {
            let findParent = item.closest(parentEl);
            findParent.remove();
        })
    })
}


export { generateWorkerRow, removeParentNode };