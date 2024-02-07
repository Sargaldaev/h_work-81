import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LinkSchema = new Schema({

  url: {
    type: String,
    required: true
  },

  shortUrl: {
    type: String,
    required: true,
    unique: true
  }

});


const Link = mongoose.model('Link', LinkSchema);

export default Link;