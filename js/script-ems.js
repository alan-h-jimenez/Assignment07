// CREATE AN ARRAY OF EMPLOYEES
let theEmployees = [
    ['48204769', 'Erin Gahagan', '6355', 'egahagan@evilcorp.com', 'Marketing'],
    ['86675901', 'Janetta Richen', '0505', 'jrichen@evilcorp.com', 'Marketing'],
    ['01421010', 'Mignon Duinkerk', '2696', 'mduinkerk@evilcorp.com', 'Administrative'],
    ['82031076', 'Whitney Whereat', '4285', 'wwhereat@evilcorp.com', 'Administrative'],
    ['49196556', 'Bertine Top', '2097', 'btop@evilcorp.com', 'Engineering'],
    ['01357692', 'Mathilda Breagan', '1583', 'mbreagan@evilcorp.com', 'Executive'],
    ['92197561', 'Syman Kubes', '0658', 'skubes@evilcorp.com', 'Marketing'],
    ['00459309', 'Jeralee Viant', '4430', 'jviant@evilcorp.com', 'Executive'],
    ['21141051', 'Selia Mowsdell', '7531', 'smowsdell@evilcorp.com', 'Administrative'],
    ['73317221', 'Devonne Pretley', '6304', 'dpretley@evilcorp.com', 'Engineering'],
    ['27335302', 'Kaine Dods', '3616', 'kdods@evilcorp.com', 'Sales'],
    ['87594104', 'Abbe Gagie', '4081', 'agagie@evilcorp.com', 'Quality Assurance'],
    ['54336840', 'Ed Toffolo', '8740', 'etoffolo@evilcorp.com', 'Quality Assurance'],
    ['24428774', 'Husain Willmett', '4389', 'hwillmett@evilcorp.com', 'Engineering'],
    ['64706325', 'Ravi Capper', '2615', 'rcapper@evilcorp.com', 'Engineering'],
    ['93586591', 'Deane Cowope', '5251', 'dcowope@evilcorp.com', 'Administrative'],
    ['86971865', 'Burtie Josse', '6732', 'bjosse@evilcorp.com', 'Quality Assurance'],
    ['08711120', 'Mellisent Habbema', '8357', 'mhabbema@evilcorp.com', 'Marketing'],
    ['08464426', 'Marguerite Dallman', '1480', 'mdallman@evilcorp.com', 'Administrative'],
    ['02582212', 'Maurise Shank', '6625', 'mshankj@evilcorp.com', 'Executive']
]
// GET DOM ELEMENTS
let theForm = document.getElementById('addForm')
let theTable = document.getElementById('empTable')

setupData()


// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
function setupData() {
    // DEFINE VARIABLES
    let browserStorage = localStorage.getItem('employees') || ''

    if (browserStorage.length > 0) {
        theEmployees = JSON.parse(localStorage.getItem('employees'))
    }

    // BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
    buildGrid()
}

// ADD EMPLOYEE
theForm.addEventListener('submit', (e) => {
    // DEFINE VARIABLES
    let employeeData = []

    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    employeeData[0] = document.getElementById('id').value
    employeeData[1] = document.getElementById('name').value
    employeeData[2] = document.getElementById('extension').value
    employeeData[3] = document.getElementById('email').value
    employeeData[4] = document.getElementById('department').value

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    theEmployees.push(employeeData)

    // BUILD THE GRID
    buildGrid()

    // RESET THE FORM
    theForm.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
});

// DELETE EMPLOYEE
theTable.addEventListener('click', (e) => {
    // DEFINE VARIABLES
    let index, rowCells, employeeName

    // VERIFY DELETE BUTTON WAS CLICKED    
    if (e.target.classList.contains('btn')) {

        // GET USER CONFIRMATION TO DELETE ROW
        rowCells = e.target.parentElement.parentElement.childNodes
        employeeName = rowCells[1].innerHTML
        if (confirm(`Are you sure you want to delete ${employeeName} from the table?`)) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            index = e.target.parentElement.parentElement.rowIndex - 1
            console.log(`Row to remove: ${index}`)

            // REMOVE EMPLOYEE FROM ARRAY
            theEmployees.splice(index, 1)
            
            // BUILD THE GRID
            buildGrid()
        }
    }
})

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // DEFINE VARIABLES
    let tableHTML = ''
    let tableBody, tableRow, theOutput

    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    theTable.removeChild(theTable.getElementsByTagName('tbody')[0]);

    // REBUILD THE TBODY FROM SCRATCH
    tableBody = document.createElement('tbody')

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (employee of theEmployees) {
        tableRow = '<tr>'
        // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
        for (item of employee) {
            tableRow += '<td>' + item + '</td>'
        }
        tableHTML += tableRow + '<td><button type="button" class="btn btn-danger btn-sm float-end delete">X</button></td></tr>'
    }

    tableBody.innerHTML = tableHTML

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    theTable.appendChild(tableBody)

    // UPDATE EMPLOYEE COUNT
    theOutput = document.getElementById('empCount')
    theOutput.innerHTML = '(' + theEmployees.length + ')'

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(theEmployees))
};