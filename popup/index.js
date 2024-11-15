import units from "../scripts/units.js"

const input = document.querySelector("input")
const convertBtn = document.querySelector("button")
const main = document.querySelector("main")

const unitValue = localStorage.getItem("unitValue")
render(unitValue ? Number(unitValue) : 1)
input.value = unitValue ? unitValue : ''

function render(val){
    let metricBlocks = ""
    for (let i = 0; i < units.length; i++){
        let curUnt = units[i]
        metricBlocks += `
            <div class='unit-block'>
                <h3>${curUnt.unit} (${curUnt.metric}/${curUnt.imperial})</h3>
                <p>
                    ${val} ${curUnt.metric} = ${(val*curUnt.metToImp).toFixed(3)} ${curUnt.imperial} | ${val} ${curUnt.imperial} = ${(val*curUnt.impToMet).toFixed(3)} ${curUnt.metric}
                </p>
            </div>
        `
    }
    main.innerHTML = metricBlocks
}

convertBtn.addEventListener("click", function(){
    let inpVal = Number(input.value)
    if (!inpVal) { return }
    render(inpVal)
})

input.addEventListener("keydown", function(event){
    if (!(event.key >= '0' && event.key <= '9' || event.key === 'Backspace')){
        event.preventDefault()        
    }
})
input.addEventListener("change", function(){
    localStorage.setItem("unitValue", `${input.value}`)
})