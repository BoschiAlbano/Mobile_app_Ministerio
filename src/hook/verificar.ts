let mensaje: string;
let bandera: Boolean;

function Verificar(Obj:{}) {

    bandera = false;
    
    try {
        Object.entries(Obj).forEach(element => {
            if (element[1] === "") {
                mensaje = ` El Campo ${element[0]} esta vacio.`
                bandera = true
                throw new Error(mensaje);
            };
        });
        return {bandera, mensaje};
    } catch (error) {
        return {bandera, mensaje};
    }
}

export default Verificar;