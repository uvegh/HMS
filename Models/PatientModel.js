const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PatientSchema = new Schema(
  {
    CARD_NO: { type: Number, unique: true, reuired: true },
    FIRST_NAME: { type: String, required: true },
    LAST_NAME: { type: String, required: true },
    AVATAR: { type: String },
    GENDER: { type: String, required: true },
    D_O_B: { type: String, required: true },
    PHONE: { type: Number, required: true },
    EMAIL: { type: String },
    ADDRESS: { type: String },
    OCCUPATION: { type: String },
    TYPE_OF_PATIENT: { type: String },
    VITALS: {
      BLOOD_GROUP: { type: String },
      BLOOD_PRESSURE: { type: String },
      WEIGHT: { type: String },
      HEIGHT: { type: String }
    },
    ALLERGIES: { type: String },
    INSURANCE: { type: String },
    EMERGENCY_CONTACT: {
      FIRST_NAME: { type: String, required: true },
      LAST_NAME: { type: String, required: true },
      PHONE: { type: String, required: true },
      EMAIL: { type: String }
    },
    BED_ID: { type: mongoose.Schema.Types.ObjectId, ref: 'Bed' }
  },
  { timestamps: true }
)

// Define a pre-save hook to increment the CARD_NO field
PatientSchema.pre('save', function (next) {
  const doc = this
  if (doc.isNew) {
    mongoose.model('Patient', PatientSchema).countDocuments((err, count) => {
      if (err) {
        return next(err)
      }
      doc.CARD_NO = count + 1
      next()
    })
  } else {
    next()
  }
})

const Patient = mongoose.model( 'Patient', PatientSchema )

module.exports = Patient