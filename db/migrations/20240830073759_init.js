/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex) {
    return (knex.schema.createTable('BasicOffer' , table=>{
      table.uuid('offerId').primary();
      table.uuid('adjustEventId');
      table.string('offerName' , 300);
      table.integer('price');
      table.boolean('specialOffer');
      table.string('Enabled');
      table.unique(['offerId' , 'adjustEventId']);

      table.integer('coin');
      table.integer('cash');
      table.integer('bonusCash');
    }));
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable('BasicOffer');
  }
  