const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  hbl_no: { type: String, required: true },
  mbl_no: { type: String, required: true },
  po_ref_no: { type: String, required: true },
  recipt: { type: String, required: true },
  recipt_date: { type: Date, required: true },
  loading: { type: String, required: true },
  loading_date: { type: Date, required: true },
  discharge: { type: String, required: true },
  discharge_date: { type: Date, required: true },
  delivery: { type: String, required: true },
  delivery_date: { type: Date, required: true },
  booking_no: { type: String, required: true },
  booking_date: { type: Date, required: true },
  size_type: { type: String, required: true },
  carrier: { type: String, required: true },
  commodity: { type: String, required: true },
  milestone: { type: String, required: true },
  milestone_group: { type: String, required: true },
  shipper: { type: String, required: true },
  consignee: { type: String, required: true },
  estimated_time_of_departure: { type: Date, required: true },
  estimated_time_of_arrival: { type: Date, required: true },
  actual_time_of_departure: { type: Date, required: true },
  actual_time_of_arrival: { type: Date, required: true },
  booking_status: { type: String },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Shipment', shipmentSchema);

