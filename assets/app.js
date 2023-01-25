let masInformacion = document.getElementById('masInformacion');
let infoCoder = document.getElementById('infoCoder', 'infoCoder2');
let infoUCASAL = document.getElementById('infoUCASAL', 'infoUCASAL2');
let infoIFTS = document.getElementById('infoIFTS', 'infoIFTS2');
let divCierre = document.getElementById('divCierre');

function cierreYEliminacion () {
    [divCierre.style.display = 'block', masInformacion.innerHTML = ''];
};

infoCoder.addEventListener('click', (e) => {e.preventDefault();
    [cierreYEliminacion(), masInformacion.innerHTML += '<h4>Coderhouse</h4><p>Desarrollador Front End React<br>6 materias aprobadas<br>Carrera finalizada, certificación obtenida</p>'];
});
infoUCASAL.addEventListener('click', (e) => {e.preventDefault();
    [cierreYEliminacion(), masInformacion.innerHTML += "<h4>Universidad Católica de Salta</h4><p>Abogacía<br>Iniciada en 2019, actualmente cursando el 4o año<br>En curso</p>"];
});
infoIFTS.addEventListener('click', (e) => {e.preventDefault();
    [cierreYEliminacion(), masInformacion.innerHTML += "<h4>IFTS N°16 GCBA</h4><p>Tecnicatura Superior en Análisis de Sistemas<br>6 materias aprobadas<br>En curso</p>"];
});
divCierre.addEventListener('click', (e) => {e.preventDefault();
    [divCierre.style.display = 'none', masInformacion.innerHTML = ''];
});