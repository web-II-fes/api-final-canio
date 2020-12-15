import { Schema, model } from 'mongoose';

const schemaPaquete = new Schema({
    nombreRemit: String,
    direccionRemit: String,
    nombreDestin: String,
    direccionDestin: String,
    descripcionPaq: String,
    fechaEntrega: Date
});

export let paqueteSchema = model('schemaPaquete', schemaPaquete, 'paquetes' );
