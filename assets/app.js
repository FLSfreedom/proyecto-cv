let masInformacion = document.getElementById('masInformacion');
let infoCoder = document.getElementById('infoCoder');
let infoUCASAL = document.getElementById('infoUCASAL');
let infoIFTS = document.getElementById('infoIFTS');
let infoArgProg1 = document.getElementById('infoArgProg1');
let infoArgProg2 = document.getElementById('infoArgProg2');
let infoEdutin = document.getElementById('infoEdutin');
let divCierre = document.getElementById('divCierre');

function cierreYEliminacion () {
    [divCierre.style.display = 'block', masInformacion.innerHTML = ''];
};

infoCoder.addEventListener('click', (e) => {e.preventDefault();
    [cierreYEliminacion(), masInformacion.innerHTML += '<h4>Coderhouse</h4><p>Desarrollador Front End React<br>HTML5, CSS3 & Javascript. Bootstrap. React. Sass.<br>Carrera iniciada en junio de 2022. Próximo a finalizar en febrero de 2023 y obtener certificación</p>'];
});
infoUCASAL.addEventListener('click', (e) => {e.preventDefault();
    [cierreYEliminacion(), masInformacion.innerHTML += "<h4>Universidad Católica de Salta</h4><p>Abogacía<br>Iniciada en 2019, actualmente cursando el 4to (cuarto) año de carrera.<br>En curso.</p>"];
});
infoIFTS.addEventListener('click', (e) => {e.preventDefault();
    [cierreYEliminacion(), masInformacion.innerHTML += "<h4>IFTS N°16 GCBA</h4><p>Tecnicatura Superior en Análisis de Sistemas<br>6 materias aprobadas.<br>En curso.</p>"];
});
infoArgProg1.addEventListener('click', (e) => {e.preventDefault();
    [cierreYEliminacion(), masInformacion.innerHTML += '<h4>Argentina Programa "Sé programar"</h4><p>Introducción a la programación orientada a objetos<br>Lenguajes Javascript y Ruby. Septiembre a noviembre de 2022.<br>Certificación obtenida.</p>'];
});
infoArgProg2.addEventListener('click', (e) => {e.preventDefault();
    [cierreYEliminacion(), masInformacion.innerHTML += '<h4>Argentina Programa "Primeros pasos del desarrollo Front End" (Ticmas)</h4><p>Certificación en Desarrollo web Front End<br>HTML5, CSS3 & Javascript. Bootstrap. Iniciado en noviembre de 2022.<br>En curso.</p>'];
});
infoEdutin.addEventListener('click', (e) => {e.preventDefault();
    [cierreYEliminacion(), masInformacion.innerHTML += '<h4>Edutin</h4><p>Curso de certificación en Ruby on Rails<br>Iniciado en diciembre de 2022.<br>En curso.</p>'];
});
divCierre.addEventListener('click', (e) => {e.preventDefault();
    [divCierre.style.display = 'none', masInformacion.innerHTML = ''];
});