const Table = require("../models/tableModel");
const createhttpError = require("http-errors"); 
const mongoose = require("mongoose");

const addTable = async (req, res,next) => {
    try {

        const { tableNo,seats } = req.body;

        if(!tableNo) {
            const error = createhttpError(400, "Please provide table number");
            return next(error);
        }   

        const isTablePresent = await Table.findOne({tableNo});

        if( isTablePresent) {
            const error = createhttpError(400, "Table already exists");
            return next(error);
        }

        const newTable = new Table({tableNo,seats});
        await newTable.save();

        res.status(201).json({success: true, message: "Table added successfully", data: newTable});
        
    } catch (error) {
        next(error);
        
    }
}

const getTables = async (req, res,next) => {

    try {
        
        const tables = await Table.find().populate({
            path: "currentOrder",
            select: "customerDetails"
        });
        res.status(200).json({success: true, data: tables});

    } catch (error) {
        next(error);
        
    }
    
}

const updateTable = async (req,res,next) => {
    try {
        
        const{status,orderID} = req.body;

        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = createhttpError(404, "Invalid id!");
        return next(error);
        }

        const table = await Table.findByIdAndUpdate(
            id,
            {status, currentOrder: orderID},
            {new: true}
        );

        if(!id) {
            const error = createhttpError(404, "Table not found");
            return error;
        }

        res.status(200).json({success: true, message: "Table updated successfully", data: table});
    } catch (error) {
        next(error);
        
    }
}

module.exports = {addTable, getTables, updateTable};