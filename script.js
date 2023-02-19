
const thermometer = () => {
    let heat = document.getElementById('heat');
    heat.innerHTML = '<i class="fa-solid fa-temperature-empty"></i>';
    heat.style.color = 'orange';

    setTimeout(()=>{
        heat.innerHTML = '<i class="fa-solid fa-temperature-quarter"></i>';
        heat.style.color = 'orange';
    },1000);

    setTimeout(()=>{
        heat.innerHTML = '<i class="fa-solid fa-temperature-half"></i>';
        heat.style.color = 'darkorange';
    },2000)

    setTimeout(()=>{
        heat.innerHTML = '<i class="fa-solid fa-temperature-three-quarters"></i>';
        heat.style.color = 'red';
    },3000);

    setTimeout(()=>{
        heat.innerHTML = '<i class="fa-solid fa-temperature-full"></i>';
        heat.style.color = 'darkred';
    },4000)
}

setInterval(thermometer,5000);

thermometer();