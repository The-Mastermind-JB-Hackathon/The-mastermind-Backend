exports.up = async (knex) => {
    await knex.schema
      .createTable('devices', (devices) => {
        devices.increments('device_id')
        devices.string('uuid', 200).notNullable()
        devices.integer('user_id')
        .references('user_id')
        .inTable('users')
        .onDelete('cascade')
        .onUpdate('cascade')
        devices.string('device_name')
        devices.string('alert_message')
        devices.string('imgUrl')
      })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('devices')
  }