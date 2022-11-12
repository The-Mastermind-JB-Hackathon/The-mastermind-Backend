exports.up = async (knex) => {
    await knex.schema
      .createTable('associated_phone', (devices) => {
        devices.increments('associated_phone_id')
        devices.string('phone_number', 200)
        devices.string('subscriber_name', 200)
        devices.integer('device_id')
        .references('device_id')
        .inTable('devices')
        .onDelete('cascade')
        .onUpdate('cascade')
        .notNullable()
        devices.integer('user_id')
        .references('user_id')
        .inTable('users')
        .onDelete('cascade')
        .onUpdate('cascade')
        .notNullable()
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('associated_phone')
  }