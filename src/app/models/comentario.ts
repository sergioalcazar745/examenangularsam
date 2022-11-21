export class Comentario{
    constructor(
        public idComentario: number, 
        public idCubo: number,
        public idUsuario: string, 
        public comentario: string,
        public fechaComentario: string
    ){}
}