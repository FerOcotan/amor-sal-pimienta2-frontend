export const formatearDinero = cantidad => {
    if (typeof cantidad !== 'number' || isNaN(cantidad)) {
        console.warn("Valor inválido en formatearDinero:", cantidad); // Log para depuración
        return "$0.00"; // Valor seguro en caso de error
    }

    return cantidad.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN'
    });
}
