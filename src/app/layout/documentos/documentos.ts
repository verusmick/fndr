export class Document {
    cod_documento: number;
    signatura: string;
    titulo: string;
    fecha: string;
    forma_ingreso: string;
    contenido: string;
    ejemplaresactual: string;
    cod_archivo: number;
    cod_volumen: number;
    cod_proyecto: string;
    cod_nivel_descripcion: number;
    ejemplarestotal: number;
    cod_unidad_org: number;
    arc_area: string;
    fec_ini: Date;
    fec_fin: Date;
    rdn_estado: string;
    rdn_transaccion: string;
    aud_usu_creacion: string;
    aud_fec_creacion: Date;
    aud_usu_modificacion: string;
    aud_fec_modificacion: Date;

  constructor(
    cod_documento: number = 0,
    signatura: string = '',
    titulo: string = '',
    fecha: string = '',
    forma_ingreso: string = '',
    contenido: string = '',
    ejemplaresactual: string = '',
    cod_archivo: number = 0,
    cod_volumen: number = 0,
    cod_proyecto: string = '',
    cod_nivel_descripcion: number = 0,
    ejemplarestotal: number = 0,
    cod_unidad_org: number = 0,
    arc_area: string = '',
    fec_ini: Date = null,
    fec_fin: Date = null,
    rdn_estado: string = '',
    rdn_transaccion: string = '',
    aud_usu_creacion: string = '',
    aud_fec_creacion: Date = null,
    aud_usu_modificacion: string = '',
    aud_fec_modificacion: Date = null
  ) {
    this.cod_documento = cod_documento;
    this.signatura = signatura;
    this.titulo = titulo;
    this.fecha = fecha;
    this.forma_ingreso = forma_ingreso;
    this.contenido = contenido;
    this.ejemplaresactual = ejemplaresactual;
    this.cod_archivo = cod_archivo;
    this.cod_volumen = cod_volumen;
    this.cod_proyecto = cod_proyecto;
    this.cod_nivel_descripcion = cod_nivel_descripcion;
    this.ejemplarestotal = ejemplarestotal;
    this.cod_unidad_org = cod_unidad_org;
    this.arc_area = arc_area;
    this.fec_ini = fec_ini;
    this.fec_fin = fec_fin;
    this.rdn_estado = rdn_estado;
    this.rdn_transaccion = rdn_transaccion;
    this.aud_usu_creacion = aud_usu_creacion;
    this.aud_fec_creacion = aud_fec_creacion;
    this.aud_usu_modificacion = aud_usu_modificacion;
    this.aud_fec_modificacion = aud_fec_modificacion;
  }
}


