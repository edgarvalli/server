module.exports = (format, date) => {
    const days = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Nobiembre','Diciembre'];
    const day = ('0' + date.getDate()).slice(-2);
    switch(format) {
        case 'dd/mm/yyyy':
            return day+' '+months[date.getMonth()]+' de '+date.getFullYear()
    }
}