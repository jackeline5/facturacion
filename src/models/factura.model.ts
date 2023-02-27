import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Factura extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idfactura?: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  detalles: object[];

  @property({
    type: 'number',
    required: true,
  })
  valorTotal: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Factura>) {
    super(data);
  }
}

export interface FacturaRelations {
  // describe navigational properties here
}

export type FacturaWithRelations = Factura & FacturaRelations;
